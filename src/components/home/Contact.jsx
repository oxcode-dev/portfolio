export const Contact = () => {
    const img = '/contact-bg.avif'
    
    return ( 
        <>
            <div className='h-full md:min-h-screen relative' id="contact">
                <div className='absolute right-0 -top-12 opacity-50 z-10'>
                    <h2 className='text-6xl md:text-[8rem] text-white/10 uppercase'>Contact</h2>
                </div>
                
                <div className="relative bottom-0 w-full">
                    <div className="h-full w-full absolute bg-gradient-to-b from-[#060801] to-black/50 via-[#060801] via-50%">
                        <div className='container mx-auto flex flex-col items-center px-6 sm:px-8 md:px-16 py-24 md:py-32 md:pt-48 relative z-10'>
                            <p className="text-md md:text-xl uppercase font-extralight">Thanks For stopping by.</p>
                            <div className="md:py-16 py-8 w-full md:max-w-5xl text-center">
                                <h2 className="inline-flex flex-col text-xl md:text-[2.8em] leading-normal">
                                    <span>
                                        Collaboration, Work inquiry, Job opportunities? Keep In Touch.
                                    </span>
                                </h2>
                            </div>
                            
                            <div>
                                <a href="mailto:mrexcelsam1@gmail.com" className="bg-white inline-flex items-center justify-center w-16 h-16 rounded-full">
                                    <svg className="text-[#060801] w-10" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10H41" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M33 1L41.9 10.2727L33 19" stroke="currentColor" strokeWidth="1.5"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end sm:pt-12 xl:pt-0">
                        <img className="w-full object-cover h-[700px] md:h-auto" src={img} />
                    </div>
                </div>
            </div>
        </>
    )
}


