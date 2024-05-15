import Image from 'next/image'

const image = 'https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg'

export const Projects = () => {
    return (
        <div className='min-h-screen relative'>
            <div className='absolute right-0 -top-12 opacity-50'>
                <h2 className='text-6xl md:text-[8rem] text-white/10 uppercase'>Projects</h2>
            </div>
            <div className='container mx-auto flex flex-col items-center px-6 sm:px-8 md:px-16 py-16 md:py-24 md:pt-36'>
                <h3 className='font-semibold text-xl md:text-3xl'>
                    Turning ideas into digital solutions...
                </h3>

                <div className="py-10 mx-auto w-full md:max-w-3xl flex flex-col space-y-12">
                    {
                        [...Array(6).keys()].map((num, key) => (
                            <div key={key} className="w-full border-2 border-slate-900/70 hover:shadow-md hover:shadow-slate-800/70 md:rounded-[7.3rem] md:p-12">
                                <div>
                                    <div className="flex flex-wrap items-center">
                                        <div className="w-full md:w-1/2">
                                            {/* <Image alt="App Screenshot" src={image} width={500} height={500} className='md:rounded-[5.3rem] sm:pr-3' /> */}
                                            <img alt="App Screenshot" src={image} width={500} height={750} className='md:rounded-[5.3rem] sm:pr-3 md:h-96 md:object-cover' />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <div className='p-4 flex flex-col space-y-4'>
                                                <h4 className='font-medium text-lg md:text-xl'>Project Title</h4>
                                                <div>
                                                    <p className='font-extralight text-sm'>
                                                        Sweet creme is an online cake store that provides cakes, treats and other baked goods to their clients located primarily in Nigeria. Founded in 2018, their mission is to continue to provide top-notch baked cakes to both returning and new customers.
                                                    </p>
                                                </div>
                                                <div className='inline-flex space-x-2 text-xs flex-wrap uppercase font-extralight'>
                                                    <span>ReactJS</span>
                                                    <span>NextJS</span>
                                                    <span>Tailwind</span>
                                                    <span>Vercel</span>
                                                    <span>Firebase</span>
                                                </div>
                                                <div className='inline-flex space-x-2 flex-wrap uppercase font-extralight'>
                                                    <span>GH</span>
                                                    <span>LK</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                
            </div>
        </div>
    )
}