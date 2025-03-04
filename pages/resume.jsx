import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Jay | Resume</title>
        <meta
          name='description'
          content='I’m a Full-Stack web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/image.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Jay Gandhi</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jayp-gandhi/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/jaygandhi18'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p> 
        A highly motivated B.Tech Computer Science and Engineering student at Vellore Institute of Technology with a strong foundation in full-stack web development, problem-solving, and leadership. Proficient in HTML, CSS, JavaScript, Node.js, Express, MongoDB, and RESTful APIs, with experience in building and deploying scalable web applications. Successfully completed a summer internship at Digital Zoop, gaining hands-on experience in frontend development and website optimization. Currently serving as the Chairperson of SCRS VIT, leading event organization, team management, and technical workshops. A proactive team player with strong communication, leadership, and management skills, eager to apply technical expertise to real-world challenges.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-Stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Github
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Bootstrap
            <span className='px-2'>|</span> RESTAPI
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Vellore Institue of Technology
            </span>
            <span className='px-2'>|</span>Vellore
          </p>
          <p className='py-1 italic'>B.Tech Computer Science and Engineering (2022 - 2026) | CGPA: 9.35</p>
        </div>


        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            The Millennium School
            </span>
            <span className='px-2'>|</span>Surat
          </p>
          <p className='py-1 italic'>Higher Secondary Education (2022) | 12th CBSE | Percentage: 94.6%</p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Delhi Public School 
            </span>
            <span className='px-2'>|</span>Surat 
          </p>
          <p className='py-1 italic'>Secondary Education (2020) | 10th CBSE | Percentage: 94.4%</p>
        </div>


        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Experiences
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>DigitalZoop</span>
            <span className='px-2'>|</span> Web Development Intern
          </p>
          <p className='py-1 italic'>Summer Intern (2024)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Redesigned and enhanced the Vintage Attire e-commerce platform using HTML, CSS, and JavaScript, improving its user interface and responsiveness.
            </li>
            <li>Developed and optimized key pages, including the home page, product page, login/signup page, and contact us page, to provide a seamless shopping experience.
            </li>
            <li>
            Ensured cross-browser compatibility and mobile responsiveness, refining layouts and interactive elements for better user engagement.
            </li>
            <li>
            Gained hands-on experience in frontend development, debugging, and website optimization while working in a fast-paced professional environment.
            </li>
          </ul>
        </div>


        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Extracurricular Activities
        </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Chairperson</span>
            <span className='px-2'>|</span> Soft Computing Research Society - VIT
          </p>
          <p className='py-1 italic'>VIT STUDENTS CHAPTER</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Demonstrated leadership skills by effectively managing and guiding the SCRS VIT student chapter, overseeing event planning, team coordination, and execution of key initiatives.           
            </li>
            <li>
            Utilized strong technical expertise to organize workshops, hackathons, and research-based events, fostering an environment for students to explore and enhance their knowledge in soft computing and related domains.
            </li>
            <li>
            Developed excellent communication skills by coordinating with faculty, industry professionals, and students, ensuring smooth collaboration and successful knowledge-sharing sessions.
            </li>
            <li>
            Exhibited exceptional management abilities by handling a diverse team, delegating responsibilities, and ensuring efficient execution of events like Survival.exe, contributing to the overall growth of the organization.            
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
