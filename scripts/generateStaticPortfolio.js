#!/usr/bin/env node

/**
 * Static Portfolio HTML Generator
 * Generates a crawlable static HTML version of portfolio
 * Imports data from React config files (single source of truth)
 * Run: node scripts/generateStaticPortfolio.js
 */

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const transformModulesCommonJS = require('@babel/plugin-transform-modules-commonjs');

function prettifyTechLabel(raw) {
  const key = String(raw || '').trim();
  const dictionary = {
    js: 'JavaScript',
    ts: 'TypeScript',
    nextjs: 'Next.js',
    nodeJS: 'Node.js',
    gcloud: 'Google Cloud',
    chatgpt: 'OpenAI',
    router: 'React Router',
    styled: 'styled-components',
    mongo: 'MongoDB',
    express: 'Express',
    vercel: 'Vercel',
    npm: 'npm',
  };

  if (dictionary[key]) return dictionary[key];
  if (!key) return '';

  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function createImgStub() {
  return new Proxy({}, {
    get: (_, prop) => {
      const label = prettifyTechLabel(prop);
      return { title: label, alt: label };
    }
  });
}

function loadConfigModule(relativePath) {
  const absolutePath = path.join(__dirname, relativePath);
  const source = fs.readFileSync(absolutePath, 'utf-8');

  const transformed = babel.transformSync(source, {
    filename: absolutePath,
    babelrc: false,
    configFile: false,
    plugins: [transformModulesCommonJS],
  });

  const Module = require('module');
  const mod = new Module(absolutePath, module.parent);
  mod.filename = absolutePath;
  mod.paths = Module._nodeModulePaths(path.dirname(absolutePath));

  const localRequire = (request) => {
    if (request === 'img') return createImgStub();
    if (request.startsWith('.')) {
      return require(path.resolve(path.dirname(absolutePath), request));
    }
    return require(request);
  };

  mod.require = localRequire;
  mod._compile(transformed.code, absolutePath);

  return mod.exports;
}

// Load and normalize source-of-truth data from React config files
function loadConfigData() {
  const projectsConfig = loadConfigModule('../src/config/projects.config.js');
  const stackConfig = loadConfigModule('../src/config/stack.config.js');

  const projectsData = (projectsConfig.projects || [])
    .filter((project) => project && project.title && project.text)
    .slice(0, 6)
    .map((project) => ({
      title: project.title,
      text: project.text,
      stack: (project.stack || [])
        .map((tech) => tech?.title || tech?.alt || prettifyTechLabel(tech))
        .filter(Boolean),
      webHref: project.webHref?.href || '',
      githubHref: project.githubHref || '',
    }));

  const skillsData = Array.from(new Set(
    (stackConfig.stack?.tools || [])
      .map((tool) => tool?.title)
      .filter(Boolean)
  ));

  return { projectsData, skillsData };
}

function generateProjectsHTML(projectsData) {
  return projectsData
    .map(project => `
    <article class="project">
      <h3>${project.title}</h3>
      <p>${project.text}</p>
      <div class="project-stack">
        ${project.stack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.webHref ? `<a href="${project.webHref}" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
        <a href="${project.githubHref}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>
  `)
    .join('');
}

function generateSkillsHTML(skillsData) {
  return skillsData
    .map(skill => `<li>${skill}</li>`)
    .join('');
}

function generateHTML(projectsData, skillsData) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pawel Siwek - Full-Stack Developer Portfolio</title>
  <meta name="description" content="Full-Stack Developer based in Reading, UK. Specializing in React, Next.js, TypeScript, Node.js, and MongoDB.">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="Pawel Siwek">
  <link rel="canonical" href="https://pawelsiwek.co.uk/portfolio.html">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      padding: 40px;
    }
    header {
      text-align: center;
      margin-bottom: 50px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 30px;
    }
    h1 {
      font-size: 2.5em;
      color: #222;
      margin-bottom: 10px;
    }
    .subtitle {
      font-size: 1.2em;
      color: #666;
      margin-bottom: 20px;
    }
    .contact-links {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 15px;
    }
    .contact-links a {
      color: #007bff;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }
    .contact-links a:hover {
      color: #0056b3;
      text-decoration: underline;
    }
    section {
      margin-bottom: 50px;
    }
    h2 {
      font-size: 2em;
      color: #222;
      margin-bottom: 25px;
      padding-bottom: 10px;
      border-bottom: 3px solid #007bff;
    }
    .about-text {
      font-size: 1.05em;
      line-height: 1.8;
      color: #444;
      margin-bottom: 20px;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 25px;
      margin-bottom: 30px;
    }
    .project {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 8px;
      border-left: 4px solid #007bff;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .project:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 123, 255, 0.15);
    }
    .project h3 {
      color: #007bff;
      margin-bottom: 12px;
      font-size: 1.4em;
    }
    .project p {
      color: #555;
      margin-bottom: 15px;
      line-height: 1.6;
    }
    .project-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }
    .tech-badge {
      background: #e7f3ff;
      color: #007bff;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85em;
      font-weight: 500;
    }
    .project-links {
      display: flex;
      gap: 12px;
    }
    .project-links a {
      color: #007bff;
      text-decoration: none;
      font-weight: 500;
      padding: 8px 16px;
      border: 1px solid #007bff;
      border-radius: 4px;
      transition: all 0.3s;
      font-size: 0.9em;
    }
    .project-links a:hover {
      background: #007bff;
      color: white;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    .skills-grid ul {
      list-style: none;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #007bff;
    }
    .skills-grid li {
      padding: 8px 0;
      color: #555;
      font-size: 1em;
    }
    .skills-grid li:before {
      content: "✓ ";
      color: #007bff;
      font-weight: bold;
      margin-right: 8px;
    }
    footer {
      text-align: center;
      margin-top: 50px;
      padding-top: 30px;
      border-top: 2px solid #ddd;
      color: #888;
      font-size: 0.9em;
    }
    .cta {
      background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin: 30px 0;
    }
    .cta a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1em;
    }
    .cta a:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 2em;
      }
      h2 {
        font-size: 1.5em;
      }
      .container {
        padding: 20px;
      }
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Pawel Siwek</h1>
      <p class="subtitle">Full-Stack Developer | React • Next.js • TypeScript • Node.js</p>
      <p class="subtitle">Reading, UK</p>
      <div class="contact-links">
        <a href="https://pawelsiwek.co.uk/content" target="_blank" rel="noopener noreferrer">Interactive Portfolio</a>
        <a href="https://github.com/pavdevuk" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/pawel-siwek-78432119b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:contact@pawelsiwek.co.uk">Email</a>
      </div>
    </header>

    <section id="about">
      <h2>About Me</h2>
      <div class="about-text">
        <p>I'm a Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. I build modern, responsive web applications with clean architecture, high performance, and excellent user experience.</p>
        <p>My expertise spans full-stack development: responsive front-end interfaces with React and Next.js, state management (Redux Toolkit, Zustand), scalable back-end systems with Node.js and Express, RESTful APIs, MongoDB databases, and cloud deployment on Vercel and Google Cloud Platform.</p>
        <p>In production, I actively use TypeScript and increasingly incorporate AI capabilities—particularly OpenAI API integrations—to enable intelligent automation, data processing, and smarter application features.</p>
      </div>
    </section>

    <section id="projects">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        ${generateProjectsHTML(projectsData)}
      </div>
      <div class="cta">
        <p>Explore more projects and view the interactive portfolio:</p>
        <a href="https://pawelsiwek.co.uk/content">Visit Full Portfolio</a>
      </div>
    </section>

    <section id="skills">
      <h2>Core Skills & Tools</h2>
      <div class="skills-grid">
        <ul>
          ${generateSkillsHTML(skillsData)}
        </ul>
      </div>
    </section>

    <footer>
      <p>Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p>This page is automatically generated from portfolio config files. Last updated: ${new Date().toISOString().split('T')[0]}</p>
      <p><a href="https://pawelsiwek.co.uk/resume.html">View Static Resume</a> | <a href="https://pawelsiwek.co.uk/content">Interactive Portfolio</a></p>
    </footer>
  </div>
</body>
</html>`;
}

// Main execution
try {
  const { projectsData, skillsData } = loadConfigData();
  const outputPath = path.join(__dirname, '../public/portfolio.html');
  const html = generateHTML(projectsData, skillsData);

  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`✅ Generated static portfolio at: ${outputPath}`);
} catch (error) {
  console.error('❌ Error generating portfolio:', error.message);
  process.exit(1);
}
