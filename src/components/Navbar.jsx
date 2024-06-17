'use client'
import React, { useState, useEffect } from "react"
import { Logo } from "./index"
import { socialLinks, navigationLinks } from '../constants/index'

export const NavBar = () => {
    const [active, setActive] = useState(false)
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
            <div className="fixed w-full z-50 bg-[#060801]">
                <div className="w-full md:container mx-auto flex justify-between items-start py-8 md:px-6 px-4 pr-6">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <a className="mr-2" href="#" onClick={e => toggleNavs(e) }>
                            <svg className="text-white" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor"/><circle cx="14" cy="2.5" r="2.5" fill="currentColor"/><circle cx="2.5" cy="14" r="2.5" fill="currentColor"/><circle cx="14" cy="14" r="2.5" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={`h-screen w-full fixed bg-[#060801] z-[70] top-0 left-0 transition-transform duration-[0.8s] ease-[ease-in-out] ${active ? "translate-y-[0%]" : "translate-y-[-150%]"}`}>
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