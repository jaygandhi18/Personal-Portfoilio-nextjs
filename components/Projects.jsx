import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import vintageAttire from '../public/assets/projects/vintageAttire.png';
import airbnbClone from '../public/assets/projects/airbnbClone.png'
import spotifyClone from '../public/assets/projects/spotifyClone.png'
import moneyMatter from '../public/assets/projects/moneyMatter.png'
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
            title='Vintage-Attire'
            backgroundImg={vintageAttire}
            projectUrl='/vintageAttire'
            tech='HTML,CSS,JS'

          />
          <ProjectItem
            title='Spotify Clone'
            backgroundImg={spotifyClone}
            projectUrl='/spotifyClone'
            tech='HTML, CSS, JS'

          />
          <ProjectItem
            title='MoneyMatters'
            backgroundImg={moneyMatter}
            projectUrl='/moneyMatters'
            tech='HTML, CSS, JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
