import Head from 'next/head'
import {BsFillMoonStarsFill, BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillHome} from 'react-icons/ai';
import Image from 'next/image';
import pfp from '../public/pfp.png';
import {useState} from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='font-system'>
      <Head>
        <title>Abdullah Akhtar's Website</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"/>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className='bg-neutral-900 min-h-screen'>
        <section className='container mx-auto xl:px-64 lg:px-32  md:px-20 py-0 px-2'>
        <nav className='bg-neutral-800 rounded-bl-xl rounded-br-xl max-w-[90%] lg:max-w-[90%] 
        md:max-w-[90%] sm:max-w-[90%] mx-auto'>
        <div className='min-w-max max-w-[100%] sm:max-w-[100%] md:max-w-[90%] lg:max-w-[90%] mx-auto px-1 sm:px-0 md:px-0 lg:px-0'>
          <div className='lg:flex md:flex lg:justify-between md:justify-between px-8 lg:px-0 md:px-0 sm:px-0'>
            <div className='lg:flex md:flex'>
              <div className='flex justify-center'><a className='text-neutral-700 hover:bg-neutral-600 text-2xl flex gap-5 py-3 px-5' href="/"><AiFillHome size={30}/>Home&nbsp;&nbsp;</a></div>
            </div>
            <div className='lg:flex md:flex'>
              <div className='flex justify-center'><a className='text-neutral-700 hover:bg-neutral-600 text-2xl flex gap-5 py-3 px-5' href="CV.pdf" target="_blank"><BsFillFileEarmarkTextFill size={30}/>CV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
              <div className='flex justify-center'><a className='text-neutral-700 hover:bg-neutral-600 text-2xl flex gap-5 py-3 px-5' target="_blank" rel="noopener noreferrer" 
              href="https://github.com/AA760"><AiFillGithub size={30}/>GitHub</a></div>
            </div>
          </div>
        </div>
        </nav>
        </section>


        <section className='container mx-auto xl:px-64 lg:px-52 md:px-48  px-12 py-10 flex justify-center'>
        <div className='text-center p-10'>
          <h2 className='text-3xl py-0 font-medium text-slate-300'>Hi, I'm<br/><b><span className='text-teal-600'>Abdullah Akhtar</span></b></h2>
          <h3 className='text-xl py-10 text-slate-400 font-medium'>A computer science graduate who likes writing code.</h3>
        </div>
        </section>
        
        <section className='container mx-auto xl:px-96 lg:px-64 md:px-48 px-12 py-10'>
        <div>
          <h3 className='text-lg py-1 text-teal-600'>Academic Background</h3>
          <p className='text-sm py-5 leading-8 text-stone-200'>
          I studied computer science for my undergraduate degree at Brunel University London and graduated in June of 2022. 
          During the 3-year course I undertook multiple software development projects, including a full stack web application, and a machine learning-based browser 
          extension which you can see more about below. If you would like to view or download a copy of my CV, you can click <span className='text-teal-400'>
          <a href="CV.pdf" target="_blank">here</a></span>. 
          </p>
        </div>
        </section>


        <section className='container mx-auto xl:px-96 lg:px-64 md:px-48 px-12 py-10 text-sm'>
          <div>
            <h3 className='text-lg py-1 text-teal-600'>Project Work</h3>
            <p className='text-sm py-5 leading-8 text-stone-200'>
            Here, you can see an overview of some of my recent projects. Clicking a card will take you to the GitHub page for that project. 
            You can also just view my GitHub profile by clicking <span className='text-teal-400'><a target="_blank" 
            rel="noopener noreferrer" href="https://github.com/AA760">here</a></span>.
            </p>
          </div>

          <div className='lg:flex lg:justify-around gap-16'>
            <div className='text-center shadow-md shadow-neutral-700  hover:bg-neutral-800 p-5 rounded-2xl my-20 bg-neutral-800 opacity-90 hover:opacity-100 gap-5'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/AA760/abusive-text-classifier">
              <h3 className='font-medium pt-2 pb-2 text-slate-400'><b>Abusive Text Classifier</b></h3>
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

            <div className='text-center shadow-md shadow-neutral-700  hover:bg-neutral-800 p-5 rounded-2xl my-20 bg-neutral-800 opacity-90 hover:opacity-100 gap-5'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/AA760/multilingual-text-grouper">
              <h3 className='font-medium pt-2 pb-2 text-slate-400'><b>Multilingual Text Grouper</b></h3>
              <p className='py-2 text-white'>
                <b>A script for grouping semantically identical texts which are <br/> written in different languages.</b>
              </p>
              <h4 className='py-2 text-slate-400'><b>Main tools used:</b></h4>
                <div className='justify-center flex'>
                  <ul className='list-disc text-white text-left px-16'>
                    <b>
                    <li>Python</li>
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>Scikit-learn</li>
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