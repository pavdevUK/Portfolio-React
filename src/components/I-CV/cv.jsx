import './cv.css';

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const ExperienceWrapper = styled.div`
  padding-right: 30px;
  @media (max-width: 600px) {
    padding-right: 0px;
  }
`;
const SchoolSection = styled.div`
  padding-right: 30px;
`;
const Article = styled.article`
  padding: 10px 0px 10px 0px;
`;

function Cv() {
  return (
    <>
      <Wrapper>
        <div id='cv' className='page'>
          <header className='grid-plus sectionPadding'>
            <div id='header-info'>
              <h1 id='name'>Pawel Siwek</h1>
              <h2>Full-Stack Developer</h2>
            </div>
          </header>

          <section className='grid sectionPadding'>
            <header>
              <h4>Contact Details</h4>
            </header>
            <Article className='grid-plus' id='cont-art'>
              <div id='left'>
                <div className='head'>Email:</div>
                <div className='head'>Portfolio:</div>
                <div className='head'>GitHub:</div>
                <div className='head'>Telephone:</div>
                <div className='head'>Location:</div>
                <div className='head'>Languages:</div>
              </div>
              <div id='right'>
                <div className='info'>P.F.Siwek@gmail.com</div>
                <div className='info'>
                  <a href='https://pawelsiwek.co.uk'>PawelSiwek.co.uk</a>
                </div>
                <div className='info'>PavDevUK</div>
                <div className='info'>+44 7463 765514</div>
                <div className='info'>Reading, UK</div>
                <div className='info'>English (Fluent), Polish (Native)</div>
              </div>
            </Article>
          </section>

          <section className='grid sectionPadding'>
            <header>
              <h4>About Me</h4>
            </header>
            <Article id='art-about' className='textPrimary'>
              <p className='textPrimary'>
                I'm a Full-Stack Developer based in Reading, UK, focused on
                building modern, responsive web applications. I specialize in{' '}
                <strong>React</strong>, <strong>Next.js (App Router)</strong>,{' '}
                <strong>TypeScript</strong>, <br />
                and <strong>Node.js</strong>, always prioritizing clean
                architecture and user experience.
              </p>
              <p className='textPrimary'>
                My work spans full-stack web applications, from responsive
                front-end interfaces and state management with{' '}
                <strong>Redux Toolkit</strong> and <strong>Zustand</strong> to
                scalable back-end systems, <strong>RESTful APIs</strong>, and
                deployments on <strong>Vercel</strong> and{' '}
                <strong>Google Cloud Platform</strong>.
              </p>
              <p className='textPrimary'>
                In production environments, I actively use{' '}
                <strong>TypeScript</strong> and increasingly incorporate AI
                capabilities—particularly <strong>OpenAI API models</strong>—to
                enable intelligent automation, data processing, and smarter
                application features.
              </p>
              <br />
              <p className='textPrimary'>
                Recent projects include{' '}
                <strong>TLG (timeline generator)</strong> a Next.js app that
                tracks GitHub activity and generates AI-powered summaries and{' '}
                <strong>Profit Radar</strong>, a tool for monitoring Copart
                auctions with AI-driven insights. Both highlight my skills in
                API integration, MongoDB, and practical automation.
                <br />
              </p>
              <br />
              <p className='textPrimary'>
                Professionally, I gained hands-on experience at{' '}
                <strong>Filament AI</strong> in 2021, customizing chat widgets
                and extending <strong>Google Cloud Functions</strong> for client
                projects.
              </p>
              <p className='textPrimary'>
                I'm committed to clean code, best practices, automated testing,
                and continuous learning in full-stack and AI-augmented
                development.
              </p>
            </Article>
          </section>

          <section className='grid sectionPadding'>
            <header>
              <h4>Skills</h4>
            </header>
            <Article id='art-know' className='skills-columns'>
              <ul>
                <li>
                  <strong>Frontend:</strong> React, Next.js, TypeScript,
                  Tailwind, Styled-Components, Redux Toolkit
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, MongoDB,
                  Mongoose, REST APIs
                </li>
                <li>
                  <strong>AI & Automation:</strong> OpenAI API, AI-powered
                  features, data processing
                </li>
                <li>
                  <strong>Cloud & DevOps:</strong> Vercel, Google Cloud
                  Functions
                </li>
                <li>
                  <strong>Tools:</strong> Git, GitHub, GitLab
                </li>
              </ul>
            </Article>
          </section>

          <section className='grid sectionPadding'>
            <header>
              <h4>Experience</h4>
            </header>
            <Article id='art-work'>
              <ExperienceWrapper>
                <div className='cv-h5-nonMargin-top'>
                  <span>Profit Radar </span>
                </div>
                <p className='textPrimary'>
                  Next.js tool for Copart auction monitoring with server-side
                  scraping, proxy support, MongoDB persistence, and AI title
                  parsing. Helps identify potential resale opportunities.
                </p>
                <p className='textPrimary'>
                  <strong>Tools & Technologies:</strong> Next.js (App Router),
                  TypeScript, Puppeteer, MongoDB, OpenAI API, Vercel
                </p>
              </ExperienceWrapper>
              <ExperienceWrapper>
                <div className='cv-h5'>
                  <span>Timeline Generator</span>
                </div>
                <p className='textPrimary'>
                  Full-stack Next.js application that automates GitHub commit
                  tracking and generates AI-powered daily development summaries
                  using OpenAI API. Features interactive timeline UI, MongoDB
                  storage, and REST API endpoints.
                </p>
                <p className='textPrimary'>
                  <strong>Tools & Technologies:</strong> Next.js (App Router),
                  TypeScript, Tailwind CSS, MongoDB/Mongoose, OpenAI API, GitHub
                  API
                </p>
              </ExperienceWrapper>
              <ExperienceWrapper>
                <div className='cv-h5'>
                  <span>
                    FilesConverto.com
                    <span className='cv-low-case'> (file conversion tool)</span>
                  </span>
                </div>
                <p className='textPrimary'>
                  File converter built with TypeScript and styled with Tailwind.
                  The framework of choice is Next.js. Users can upload files
                  with Dropzone and send them to the backend for conversion. The
                  frontend is currently in active development and continuously
                  updated.
                </p>
              </ExperienceWrapper>
              <ExperienceWrapper>
                <div className='cv-h5'>
                  <span>Work Tracker</span>
                </div>
                <p className='textPrimary'>
                  Work Tracker is a full-stack payroll management app for
                  businesses with complex shift patterns. Built with
                  Node.js/Express and React, it tracks work hours and calculates
                  earnings across multiple pay rates (base, night, weekend,
                  overtime). Features include yearly calendar generation,
                  payroll period tracking, RESTful API, MongoDB integration, and
                  schedule management. The system supports employee
                  self-service, automated payroll, and flexible scheduling.
                </p>
              </ExperienceWrapper>
              <ExperienceWrapper>
                <div className='cv-h5'>
                  <span>Portfolio</span>
                </div>
                <p className='textPrimary'>
                  Developed and continuously improved a full-stack portfolio
                  platform built with React and create-react-app. The platform
                  includes multilingual content, project showcases, CV section,
                  responsive card-based layouts, and integrated app demos.
                </p>
                <p className='textPrimary'>
                  <strong>Tools & Technologies:</strong> React, React Router,
                  TypeScript, Redux Toolkit, Styled-Components, Material-UI,
                  Tailwind CSS, Node.js, MongoDB, Vercel, Google Cloud Platform,
                  Figma
                </p>
              </ExperienceWrapper>
            </Article>
          </section>
          <section className='grid sectionPadding'>
            <header>
              <h4>Professional Experience</h4>
            </header>
            <Article id='art-work'>
              <ExperienceWrapper>
                <div className='cv-h5-nonMargin-top'>
                  <span>Full-Stack Developer – Filament AI</span>
                  <time>April 2021 – December 2021</time>
                </div>
                <p className='textPrimary'>
                  Developed and customized chat widgets for multiple clients,
                  aligning with website themes and functional requirements
                  (e.g., Rentokill, Versus Arthritis). Extended Google Cloud
                  Functions to support ticket creation with additional service
                  options. Configured and optimized EBM chatbot dialog flows,
                  adding new features to meet client needs. Enhanced Filament UI
                  (custom CSS library) by implementing new features and
                  resolving bugs.
                  <strong>Tools & Technologies:</strong> React, Node.js, Google
                  Cloud Functions, EBM, Filament UI, REST APIs
                </p>
              </ExperienceWrapper>
            </Article>
          </section>

          <section className='grid sectionPadding'>
            <header>
              <h4>Education</h4>
            </header>
            <Article>
              <div className='cv-h5-nonMargin-top'>
                <span>Relevant Coursework</span>
              </div>
              <ul>
                <li>
                  Complete React Developer (2021, w/ Redux, Hooks, GraphQL)
                </li>
                <li>JavaScript - Understanding the Weird Parts</li>
                <li>The Modern JavaScript Bootcamp Course (2020)</li>
                <li>React styled-components v5 (2021 edition)</li>
                <li>
                  The MERN Stack - Full Tutorial (MongoDB, Express, React,
                  Node.js)
                </li>
                <li>Figma - UI/UX Design</li>
              </ul>
              <SchoolSection>
                <div className='cv-h5'>
                  <span>Python Backend Bootcamp</span>
                  <time>January 2019 – February 2019</time>
                </div>
                <p className='textPrimary'>
                  Four-week backend bootcamp covering Python, Flask, Django,
                  HTML, CSS, JavaScript, Git, and Testing.
                </p>

                <div className='cv-h5'>
                  <span>Technical School of Mechanical Engineering</span>
                  <time>2003 – 2004</time>
                </div>

                <div className='cv-h5'>
                  <span>Basic Vocational School</span>
                  <time>2000 – 2003</time>
                </div>
              </SchoolSection>
            </Article>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default Cv;
