import './cv.css';

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: NunitoSans-Regular;
`;
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
        <div id='cv'>
          <header className='sectionPadding'>
            <div id='header-info'>
              <div>
                <h1 id='name'>Pawel Siwek</h1>
                <h4>JavaScript Full-Stack Developer</h4>
              </div>
            </div>
            <section className='grid sectionPadding'>
              <div id='cont-art'>
                <div className='info'>p.f.siwek@gmail.com</div>
                <div className='info'>pawelsiwek.co.uk</div>
                <div className='info'>+44 7463 765514</div>
                <div className='info'>Reading, UK</div>
              </div>
            </section>
          </header>

          <section className='grid sectionPadding'>
            <div className='section-header'>
              <p>About Me</p>
            </div>
            <Article id='art-about' className='textPrimary'>
              <p className='textPrimary'>
                I’m a Full-Stack Developer based in Reading, UK, building
                modern, data-driven web applications with React, Next.js (App
                Router), TypeScript, and Node.js. I deliver end-to-end features,
                from responsive front-end interfaces and Zustand-based state
                management to backend APIs and database design.
              </p>
              <br />
              <p className='textPrimary'>
                My recent work combines product engineering with automation and
                AI. I build scraping and enrichment pipelines with Puppeteer,
                process and normalize large data sets, and use OpenAI-based
                parsing to turn unstructured data into useful application
                features. I focus on clean architecture, reliability, and user
                experience, aiming to ship software that is both maintainable
                and valuable for end users.
              </p>
            </Article>
          </section>

          <section className='grid sectionPadding'>
            <div className='section-header'>
              <p>Skills</p>
            </div>
            <Article id='art-know' className='skills-columns'>
              <ul>
                <li>
                  <strong>Frontend:</strong> React, Next.js, TypeScript,
                  Tailwind, Styled-Components, Redux Toolkit, Zustand
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
            <div className='section-header'>
              <p>Experience</p>
            </div>
            <Article id='art-work'>
              <ExperienceWrapper>
                <div className='cv-h5-nonMargin-top'>
                  <span>Full-Stack Developer – Filament AI</span>
                  <time>April 2021 – December 2021</time>
                </div>
                <p className='textPrimary'>
                  Developed and customized chat widgets for multiple clients,
                  aligning with website themes and functional requirements
                  (e.g., Rentokil, Versus Arthritis). Extended Google Cloud
                  Functions to support ticket creation with additional service
                  options. Configured and optimized EBM chatbot dialog flows,
                  adding new features to meet client needs. Enhanced Filament UI
                  (custom CSS library) by implementing new features and
                  resolving bugs. <br></br>
                  <strong>Tools & Technologies:</strong> React, Node.js, Google
                  Cloud Functions, EBM, Filament UI, REST APIs
                </p>
              </ExperienceWrapper>
            </Article>
          </section>
          <section className='grid sectionPadding'>
            <div className='section-header'>
              <p>Projects</p>
            </div>
            <Article id='art-work'>
              <ExperienceWrapper>
                <div className='cv-h5-nonMargin-top'>
                  <span>Profit Radar </span>
                </div>
                <p className='textPrimary'>
                  Full-stack Next.js platform for Copart auction intelligence.
                  It automates auction calendar and sale-list scraping, stores
                  and updates lot data in MongoDB, enriches vehicle metadata
                  with AI-powered parsing, and supports resale opportunity
                  analysis with Otomoto market checks.
                </p>
                <p className='textPrimary'>
                  <strong>Tools & Technologies:</strong> Next.js (App Router),
                  TypeScript, React, Puppeteer, MongoDB (Mongoose), OpenAI API,
                  Zustand, SWR, Tailwind CSS
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
                    <span className='cv-low-case'>
                      {' '}
                      (files conversion tool)
                    </span>
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
                <div className='cv-h5 print-page-break-before'>
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
          <section className='grid sectionPadding '>
            <div className='section-header'>
              <p>Education</p>
            </div>
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
                  <time>2000 – 2004</time>
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
