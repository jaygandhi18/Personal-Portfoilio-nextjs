import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import jobportal from '../public/assets/projects/jobportal.jpg';
import airbnbClone from '../public/assets/projects/airbnbClone.png'
import scrsvit from '../public/assets/projects/scrsvit.jpg'
import pdfnuggets from '../public/assets/projects/PDFNuggets.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Wanderlust'
            backgroundImg={airbnbClone}
            projectUrl='/wanderlust'
            tech='Full-Stack (MERN)'
          />
          <ProjectItem
            title='JobCrate (Job Portal)'
            backgroundImg={jobportal}
            projectUrl='/jobcrate'
            tech='MERN Stack'

          />
          <ProjectItem
            title='SCRS-VIT Official Website'
            backgroundImg={scrsvit}
            projectUrl='/scrsPage'
            tech='NextJs, Framer Motion, Typescript'

          />
          <ProjectItem
            title='PDFNuggets-AI SaaS PDF Summarizer'
            backgroundImg={pdfnuggets}
            projectUrl='/PDFNuggets'
            tech='Full Stack'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
