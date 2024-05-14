export const Hero = () => {
    const info = `
        I enjoyed developing new user-facing features, the structure and design of web pages, building reusable codes, 
        optimizing page loading times, and using a variety of markup languages to create the web pages. 
        Take a look at my portfolio, and let's create great projects together!
    `
    return (
        <>
            <main className='min-h-screen w-full'>
                <div className='w-full md:container mx-auto flex flex-col items-start justify-center h-screen px-3 md:px-12'>
                    <h2 className='font-semibold text-[2.7rem] md:text-8xl leading-loose'>Samuel Osemeke</h2>
                    <h4 className='font-semibold text-3xl md:text-6xl leading-10 pl-4 md:pl-24 sm:pt-4'>Frontend Developer</h4>
                    <p className='font-extralight text-md sm:text-lg w-full md:max-w-2xl pl-4 md:pl-24 pt-6 md:pt-12'>
                        { info }
                    </p>

                    <div className="w-full md:max-w-2xl flex justify-center pt-16 py-10 animate-pulse">
                        <a href="#" className="h-10 w-6 border rounded-full inline-flex items-center py-1 justify-center animate-bounce" title="Check my Portfolio">
                            <span className="rounded-full w-2 h-2 bg-white animate-bounce"></span>
                        </a>
                    </div>
                </div>
                
            </main>
        </>
    )
}