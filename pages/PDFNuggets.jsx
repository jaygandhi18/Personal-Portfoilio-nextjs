import Image from 'next/image';
import React from 'react';
import pdfnuggets from '../public/assets/projects/PDFNuggets.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const pdfnuggetsPage = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={pdfnuggets}
          alt='PDFNuggets Project Image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>PDFNuggets</h2>
          <h3>Next.js / TypeScript / OpenAI / Stripe</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            PDFNuggets is a full-stack AI-powered SaaS application that allows users to upload and summarize PDF files using LLMs like OpenAI and Gemini. Built with Next.js and TypeScript, it features Clerk for authentication and Stripe for subscription billing. The platform supports multi-tier plans via dynamic webhook-based access control. Users can securely log in, view summaries, and manage their plans — with seamless UX and real-time feedback. PDFNuggets demonstrates modern SaaS architecture, from scalable database management using NeonDB to secure user flows using serverless functions.
          </p>
          <a
            href='https://pdf-nuggets.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/jaygandhi18/PDFNuggets'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Clerk Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Stripe
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NeonDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenAI / Gemini
              </p>
            </div>
          </div>
        </div>

        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default pdfnuggetsPage;
