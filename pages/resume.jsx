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
          A results-driven Computer Science undergraduate at VIT Vellore (CGPA: 9.24) with hands-on experience in full-stack development, scalable SaaS apps, and cloud platforms. Interned at Letmegrab and DigitalZoop, building responsive UIs, API integrations, and authentication systems. Serving as Chairperson of SCRS-VIT, leading 150+ members across domains. Proficient in React, Next.js, Node.js, Stripe, Clerk, MongoDB, and more. Strong communication and team leadership, with a passion for solving real-world problems using tech.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-1'><span className='font-bold'>Languages</span> | C++ | C | Java | Python</p>
          <p className='py-1'><span className='font-bold'>Frontend</span> | HTML5 | CSS3 | JavaScript | React.js | Next.js | Tailwind CSS | EJS | Framer Motion</p>
          <p className='py-1'><span className='font-bold'>Backend</span> | Node.js | Express.js | REST APIs | Passport.js</p>
          <p className='py-1'><span className='font-bold'>Database</span> | MongoDB | MySQL</p>
          <p className='py-1'><span className='font-bold'>Cloud & Tools</span> | Git | Docker | Cloudinary | Multer | Redux Toolkit | Clerk | Supabase | NeonDB | Vercel | Render</p>
          <p className='py-1'><span className='font-bold'>Analytics</span> | Power BI | MS Excel | Pandas | Numpy | Matplotlib</p>
          <p className='py-1'><span className='font-bold'>Platforms</span> | Microsoft Azure | Oracle Cloud | AWS (hands-on)</p>
          <p className='py-1'><span className='font-bold'>Soft Skills</span> | Teamwork | Communication | Leadership | Problem-solving</p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>Education</h5>

        <div className='py-6'>
          <p className='italic'><span className='font-bold italic'>Vellore Institute of Technology</span><span className='px-2'>|</span>Vellore</p>
          <p className='py-1 italic'>B.Tech Computer Science and Engineering (2022 - 2026) | CGPA: 9.24</p>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold italic'>The Millennium School</span><span className='px-2'>|</span>Surat</p>
          <p className='py-1 italic'>Higher Secondary Education (2022) | 12th CBSE | Percentage: 94.6%</p>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold italic'>Delhi Public School</span><span className='px-2'>|</span>Surat</p>
          <p className='py-1 italic'>Secondary Education (2020) | 10th CBSE | Percentage: 94.4%</p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>Experiences</h5>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>Letmegrab e-Platform Pvt. Ltd.</span><span className='px-2'>|</span> Web Developer Intern</p>
          <p className='py-1 italic'>May 2025 – July 2025</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Developed dynamic Sell With Us UI components in React.js, improving engagement by 30%.</li>
            <li>Implemented seller registration and JWT login with RESTful API integrations.</li>
            <li>Collaborated with backend developers to create modular components and boost development speed.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>DigitalZoop</span><span className='px-2'>|</span> Web Development Intern</p>
          <p className='py-1 italic'>May 2024 – July 2024</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Built responsive UIs using HTML, CSS, and JavaScript for the Vintage Attire e-commerce platform.</li>
            <li>Worked on key pages (Home, Product, Login, Contact Us) and improved layout consistency.</li>
            <li>Enhanced performance and accessibility across devices by 40%.</li>
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>Projects</h5>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>PDFNuggets</span><span className='px-2'>|</span> AI SaaS PDF Summarizer</p>
          <p className='py-1 italic'>Deployed on Vercel</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Built a full-stack SaaS app for AI-powered PDF summarization using Next.js, TypeScript, and OpenAI/Gemini APIs.</li>
            <li>Integrated Clerk and Stripe for auth and subscriptions, supporting multi-tier plans via webhooks.</li>
            <li>Used NeonDB for scalable data storage with real-time access control.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>JobCrate</span><span className='px-2'>|</span> Full-Stack Job Portal</p>
          <p className='py-1 italic'>Deployed on Render</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Developed dashboards for recruiters and students with file upload support using Cloudinary.</li>
            <li>Built 15+ modular components using React, Redux, and Node.js backend with MongoDB.</li>
            <li>Enabled two-role login flow with secure application management.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>SCRS-VIT Official Website</span><span className='px-2'>|</span> Club Management Platform</p>
          <p className='py-1 italic'>Internal Use, Deployed via Vercel</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Built dynamic club site using Next.js and Framer Motion with mobile-first design and smooth animations.</li>
            <li>Implemented real-time countdowns, scroll effects, and dynamic data rendering with MongoDB.</li>
            <li>Scaled to support 1.2K+ events and 220+ users across multiple screens.</li>
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>Extracurricular Activities</h5>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>Chairperson</span><span className='px-2'>|</span> Soft Computing Research Society - VIT</p>
          <p className='py-1 italic'>VIT Students Chapter</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Led 150+ members across 5 domains, managing event execution and strategic operations.</li>
            <li>Organized 10+ hackathons, workshops, and tech talks with industry collaboration.</li>
            <li>Built and deployed the SCRS club website to showcase events and projects with animations.</li>
            <li>Fostered student engagement through interactive platforms and open-source contributions.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
