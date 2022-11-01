import Head from 'next/head'
import {BsFillMoonStarsFill, BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillHome} from 'react-icons/ai';
import Image from 'next/image';
import pfp from '../public/pfp.png';
import {useState} from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdullah Akhtar's Website</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"/>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className='bg-neutral-900 min-h-screen'>
        <section className='container mx-auto lg:px-10 md:px-0 py-0 sm:px-0'>
        <nav className='bg-neutral-800 sm:rounded-bl-xl sm:rounded-br-xl md:rounded-bl-xl md:rounded-br-xl lg:rounded-bl-xl lg:rounded-br-x max-w-[100%] lg:max-w-[75%] 
        md:max-w-[75%] sm:max-w-[75%] mx-auto'>
        <div className='min-w-max max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] mx-auto px-0 sm:px-11 md:px-0 lg:px-0'>
          <div className='lg:flex md:flex lg:justify-between md:justify-center px-8 lg:px-0 md:px-0 sm:px-0'>
            <div className='lg:flex md:flex'>
              <div><a className='text-neutral-700 hover:bg-neutral-600 text-4xl flex gap-5 py-3 px-5' href="/"><AiFillHome size={45}/>Home</a></div>
            </div>
            <div className='lg:flex md:flex'>
              <div><a className='text-neutral-700 hover:bg-neutral-600 text-4xl flex gap-5 py-3 px-5' href="#"><BsFillFileEarmarkTextFill size={45}/>CV</a></div>
              <div><a className='text-neutral-700 hover:bg-neutral-600 text-4xl flex gap-5 py-3 px-5' href="https://github.com/AA760"><AiFillGithub size={45}/>GitHub</a></div>
            </div>
          </div>
        </div>
        </nav>
        </section>

        <section className='container mx-auto py-10 flex justify-center'>
        <div className='text-center p-10'>
          <h2 className='text-6xl py-0 font-medium text-slate-300'>Hi, I'm<br/><b><span className='text-teal-600'>Abdullah Akhtar</span></b></h2>
          <h3 className='text-4xl py-10 text-slate-400 font-medium'>A computer science graduate with a passion for all things tech-related.</h3>
        </div>
        </section>
        
      <section className='container mx-auto px-10 py-10'>
      <div>
        <h3 className='text-3xl py-1 text-teal-600'>Academic Background</h3>
        <p className='text-md py-5 leading-8 text-stone-200 text-xl'>
        I studied computer science for my undergraduate degree at Brunel University London and graduated in June of 2022. 
        During the 3-year course I undertook multiple software development projects, including a full stack web application, and a machine learning-based browser 
        extension which you can see more about below. If you would like to view or download a copy of my CV, you can click <span className='text-teal-400'><a href="#">here</a></span> or 
        use the button at the top of this page. 
        </p>
      </div>
      </section>

      <section className='container mx-auto px-10 py-10'>
        <div>
          <h3 className='text-3xl py-1 text-teal-600'>Project Work</h3>
          <p className='text-md py-5 leading-8 text-stone-200 text-xl'>
        Below you can see an overview of a recent project I completed for my final year in university. If you would like to see the source code for this project 
        simply click the tile below. You can also view my GitHub profile by clicking <span className='text-teal-400'><a target="_blank" rel="noopener noreferrer" href="https://github.com/AA760">here</a></span> or using the button at the top
        of this page.
          </p>
        </div>
        <div className='flex justify-center'>
        <div className='text-center shadow-md shadow-neutral-700  hover:bg-neutral-800 p-5 rounded-2xl my-20 bg-neutral-800 opacity-90 hover:opacity-100'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/AA760/abusive-text-classifier">
          <h3 className='text-lg font-medium pt-2 pb-2 text-slate-400'><b>Abusive Text Classifier</b></h3>
          <p className='py-2 text-white'>
            <b>A machine learning-based browser extension that censors <br/>abusive text on any webpage in realtime.</b>
          </p>
          <h4 className='py-2 text-slate-400'><b>Main tools used:</b></h4>
          <div className='justify-center flex'>
            <ul className='list-disc text-white text-left px-16'>
              <b>
              <li>Python</li>
              <li>JavaScript</li>
              <li>NLTK</li>
              <li>Scikit-learn</li>
              <li>Flask</li>
              </b>
            </ul>
          </div>
          </a>
        </div>
      </div>
      </section>
      </main> 
    </div>
  )
}