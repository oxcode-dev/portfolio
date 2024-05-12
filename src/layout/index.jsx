'use client'

import { NavBar } from "../components/index.js";
import Head from "next/head.js";
import Script from 'next/script'

export default function RootLayout({children}) {
    return (
        <>
            <Head>
                <title>Samuel Osemeke</title>
                <Script src="https://cdn.tailwindcss.com" defer></Script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Inter:slnt,wght@-10..0,100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <div suppressHydrationWarning={true}>
                <div className="">
                    <NavBar />
                    <div className="w-8 fixed bottom-0 left-10 z-40 hidden md:flex">
                        <div className="space-y-4 flex flex-col text-white after:w-0.5 after:h-28 after:bg-white after:ml-1.5 after:mt-2">
                            <a href="#">GH</a>
                            <a href="#">LN</a>
                            <a href="#">X</a>
                            <a href="#">IN</a>
                        </div>
                    </div>
                    <div className="fixed bottom-0 right-10 z-50 hidden md:flex">
                        <div className="flex items-center after:w-0.5 after:h-28 after:bg-white after:mt-2.5" style={{ '-webkit-writing-mode': 'vertical-rl', writingMode: 'vertical-rl' }}>
                            <div className="space-x-4 font-extralight text-sm tracking-wide">
                                <a href="#">mrexcelsam1@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    { children }
                </div>
            </div>
        </>
    )
}