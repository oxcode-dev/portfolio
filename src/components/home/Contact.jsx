

export const Contact = () => {
    // const img = 'https://codewithsadee.github.io/richard-ryan/assets/images/footer-bg.jpg'
    const img = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
    return ( 
        <>
            <div className='h-full md:h-screen relative'>
                {/* <div className="absolute top-0 bottom-0 left-0 h-screen w-full z-50 bg-red-500"></div> */}
                <div className='absolute right-0 -top-12 opacity-50 z-10'>
                    <h2 className='text-6xl md:text-[8rem] text-white/10 uppercase'>Contact</h2>
                </div>
                
                <div className='container mx-auto flex flex-col items-center px-6 sm:px-8 md:px-16 py-24 md:py-32 md:pt-48 relative z-10'>
                    <p className="text-xl md:text-2xl uppercase font-extralight">Thanks For stopping by.</p>
                    <div className="py-16 pt-8 w-full md:max-w-5xl text-center">
                        <h2 className="inline-flex flex-col text-2xl md:text-[2.8em] leading-normal">
                            <span>Collaboration, Work inquiry, Job opportunities? Keep In Touch.</span>
                        </h2>
                    </div>
                    
                    <div>
                        <a href="#" className="bg-white inline-flex items-center justify-center w-16 h-16 rounded-full">
                            <svg className="text-[#060801] w-10" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10H41" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M33 1L41.9 10.2727L33 19" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full">
                    <div className="h-full w-full absolute bg-gradient-to-b from-[#060801] to-black/50 via-[#060801] via-50%"></div>
                    <img className="w-full object-cover" src={img} />
                </div>
            </div>
        </>
    )
}