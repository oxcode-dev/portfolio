'use client'
import Image from 'next/image'
import { personal } from './../assets'

export const About = () => {
    return ( 
        <>
            <div id='about' className='min-h-screen relative group'>
                <div className='absolute right-0 -top-12 opacity-50'>
                    <h2 className='text-6xl md:text-[8rem] text-white/10 uppercase'>About</h2>
                </div>
                <div className='container mx-auto flex flex-wrap items-center px-6 sm:px-8 md:px-16 py-24'>
                    <div className='w-full md:w-1/2'>
                        <Image className='grayscale hover:grayscale-0' alt="Personal Shot" src={personal} width={500} height={500} />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='md:pl-4 flex flex-col space-y-4 md:space-y-6 py-4'>
                            <h3 className='font-semibold text-xl md:text-3xl'>
                                Building the future, one line of code at a time...
                            </h3>
                            <p className='font-extralight text-md sm:text-lg w-full'>
                                Hello there, I&apos;m Oxcode - a frontend engineer and technical writer with a passion for creating digital experiences 
                                that are both beautiful and accessible. My mission is to build websites and applications that delight users, while 
                                also making them easy to use and navigate for everyone.
                            </p>
                            <p className='font-extralight text-md sm:text-lg w-full'>
                                With Over four(4) years of experience in frontend development, I specialize in creating responsive, user-friendly 
                                interfaces using ReactJS, NextJS, VueJS, BootstrapCSS, TailwindCSS, and NuxtJS. I pay close attention to detail, always 
                                striving to make sure that every interaction is smooth, intuitive, and visually appealing. 
                                I&apos;m also a strong advocate for web accessibility, ensuring that all my projects are accessible to all.
                            </p>
                        </div>
                        <div className="mt-8 md:pl-4">
                            <a className="inline-flex items-baseline leading-tight font-semibold text-slate-200 group group/link text-lg" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                                <span className='space-x-1'>
                                    <span className='group-hover:underline'>View Full</span>
                                    <span className="inline-block group-hover:underline">
                                        Résumé
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}