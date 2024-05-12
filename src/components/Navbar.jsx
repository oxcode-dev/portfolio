import React, { useState } from "react"

const navigation = [
    { title: 'Home', link: '/', },
    { title: 'About', link: '/about', },
    { title: 'Projects', link: '/store', },
    { title: 'Contact', link: '/contact', },
]
export const NavBar = () => {
    const [active, setActive] = useState(false)
    const logo = 'Oxc</>de'
    return (
        <>
            <div className="absolute w-full z-10">
                <div className="w-full md:container mx-auto flex justify-between items-center py-8 md:px-6 px-4">
                    <div className="">
                        <h2 className="text-xl font-medium">{logo}</h2>
                    </div>
                    <div>
                        <a href="#" onClick={() => setActive(prev => !prev)}>
                            <svg className="text-white" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor"/>
                                <circle cx="14" cy="2.5" r="2.5" fill="currentColor"/>
                                <circle cx="2.5" cy="14" r="2.5" fill="currentColor"/>
                                <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {
                active &&  <div className="h-screen w-full fixed bg-[#121212] z-50 top-0 left-0">
                    <div className="w-full flex flex-col items-center justify-between h-full py-16">
                        <div className="">
                            <h2 className="text-xl font-medium">{logo}</h2>
                        </div>
                        <div className='absolute right-4 md:right-24 top-8'>
                            <a href="#" onClick={() => setActive(prev => !prev)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </a>
                        </div>
                        <div className="pb-24">
                            <div className='w-full mx-auto h-full'>
                                <div className='flex flex-col mx-auto items-center justify-center h-full'>
                                    { navigation.map((nav, key) => (
                                        <span
                                            className={`px-4 py-5 text-2xl font-normal hover:text-green-600`}
                                            key={key} 
                                            href={nav.link}
                                        >
                                            {nav.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pt-10">
                            <div className="space-x-4">
                                <a href="#">GH</a>
                                <a href="#">LN</a>
                                <a href="#">X</a>
                                <a href="#">IN</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
           
        </>
    )
}