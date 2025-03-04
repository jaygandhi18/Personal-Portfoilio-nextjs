import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a passionate Full Stack Web Developer currently pursuing my B.Tech in Computer Science and Engineering at VIT Vellore. With a strong foundation in frontend and backend technologies, I enjoy building dynamic, user-friendly, and scalable web applications. My journey in development has led me to work with technologies like Next.js, React, Node.js, Express.js, MongoDB, Bootstrap, Tailwind CSS, and HTML, allowing me to create full-fledged applications that offer seamless user experiences.
          </p>
          <p className='py-2 text-gray-600'>
          I thrive on learning and problem-solving, constantly exploring new technologies to enhance my skill set. Whether it is developing intuitive UIs, optimizing database performance, or integrating APIs, I love the process of turning ideas into functional and impactful solutions. Beyond coding, I enjoy collaborating with teams, taking on challenges, and refining my technical expertise to stay ahead in the ever-evolving world of technology.

          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
