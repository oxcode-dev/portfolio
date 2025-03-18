'use client'
import React, { useState, useEffect, useContext } from "react"
import { Logo } from "./index"
import { socialLinks, navigationLinks } from '../constants/index'
import { DarkModeContext } from "@/context/DarkModeContext"

export const NavBar = () => {
    const [active, setActive] = useState(false)
    const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext)

    const toggleNavs = e => {
        setActive(prev => !prev)
        e.preventDefault();
    }

    useEffect(() => {
        if(active) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
    }, [active])

    return (
        <>
            <div className={`fixed w-full z-50 text-[${!isDarkMode ? '#060801' : 'white'}] bg-[${isDarkMode ? '#060801' : 'white'}]`}>
                <div className="w-full md:container mx-auto flex justify-between items-start py-8 md:px-6 px-4 pr-6">
                    <div>
                        <Logo />
                    </div>
                    <div className="inline-flex space-x-3 items-center">
                        <a className={`mr-2 text-[${!isDarkMode ? '#060801' : 'white'}]`} href="#" onClick={e => toggleDarkMode(e) }>
                            {/* Change to { isDarkMode ? 'light' : 'dark'} */}
                            { !isDarkMode ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" /></svg>) : null }
                            { isDarkMode ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>) : null }
                        </a>

                        <a className={`mr-2 ${!isDarkMode ? '#060801' : 'white'}`} href="#" onClick={e => toggleNavs(e) }>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="currentColor"/><circle cx="14" cy="2.5" r="2.5" fill="currentColor"/><circle cx="2.5" cy="14" r="2.5" fill="currentColor"/><circle cx="14" cy="14" r="2.5" fill="currentColor"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={`h-screen w-full fixed bg-[${isDarkMode ? '#060801' : 'white'}] z-[70] top-0 left-0 transition-transform duration-[0.8s] ease-[ease-in-out] ${active ? "translate-y-[0%]" : "translate-y-[-150%]"}`}>
                <div className="w-full flex flex-col items-center justify-across h-full py-16 space-y-8 container mx-auto relative">
                    <div className="">
                        <Logo />
                    </div>
                    <div className='absolute right-4 md:right-8 top-4 md:top-2'>
                        <a href="#" onClick={e => toggleNavs(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </a>
                    </div>
                    <div className="py-10">
                        <div className='w-full mx-auto h-full'>
                            <div className='flex flex-col mx-auto items-center justify-center h-full'>
                                { navigationLinks.map((nav, key) => (
                                    <a
                                        onClick={() => setActive(prev => !prev)}
                                        className={`px-4 py-5 text-2xl font-normal hover:text-gray-400`}
                                        key={key} 
                                        href={nav?.link || '#'}
                                    >
                                        {nav?.title || "N/A"}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="space-x-4">
                            {
                                socialLinks.map((social, key) => (
                                    <a href={social?.link || '#'} key={key}>{social?.name || "N/A"}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
