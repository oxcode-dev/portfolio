'use client'

import { NavBar, Cursor } from "../components/index.js";
import Head from "next/head.js";
import { socialLinks } from '../constants/index.js'
import { useEffect, useRef } from "react";

export default function RootLayout({children}) {
    useEffect(() => {
        const body = document.body
        const progressBar = document.querySelector('#progress-bar')

        const animateProgressBar = () => {
            let scrollDistance = -body.getBoundingClientRect().top;
            let progressWidth = (scrollDistance / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100

            progressBar.style.width = progressWidth > 0 ? Math.ceil(progressWidth) + '%' : 0
        }
    
        window.addEventListener('scroll', animateProgressBar)
    }, [])

    return (
        <>
            <Cursor />
            <div className="fixed h-2 bg-gray-600 transition-all z-[60]" id="progress-bar"></div>
            <Head>
                <title>Samuel Osemeke</title>
                <script src="https://cdn.tailwindcss.com" defer></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Inter:slnt,wght@-10..0,100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <div suppressHydrationWarning={true}>
                <div className="">
                    <NavBar />
                    <div className="w-8 fixed bottom-0 left-10 z-40 hidden md:flex">
                        <div className="space-y-4 flex flex-col text-white after:w-0.5 after:h-28 after:bg-white after:ml-1.5 after:mt-2">
                            {
                                socialLinks.map((social, key) => (
                                    <a href={social.link} key={key}>{social?.name}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="fixed bottom-0 right-10 z-50 hidden md:flex">
                        <div className="flex items-center after:w-0.5 after:h-28 after:bg-white after:mt-2.5" style={{ '-webkit-writing-mode': 'vertical-rl', writingMode: 'vertical-rl' }}>
                            <div className="space-x-4 font-extralight text-sm tracking-wide">
                                <a href="mailto:mrexcelsam1@gmail.com">mrexcelsam1@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    { children }
                </div>
            </div>
        </>
    )
}