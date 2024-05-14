import Image from 'next/image'

const image = '/mine.jpg'

export const Projects = () => {
    return (
        <div className='min-h-screen'> 
            <div className='container mx-auto flex flex-col items-center px-16 py-24'>
                <h3 className='font-semibold text-xl md:text-3xl'>
                    Building the future, one line of code at a time...
                </h3>

                <div className="py-10 mx-auto w-full md:max-w-3xl flex flex-col space-y-12">
                    {
                        [...Array(4).keys()].map((num, key) => (
                            <div key={key} className="w-full border-2 border-slate-900/70 hover:shadow-md hover:shadow-slate-800/70 rounded-[7.3rem] p-12">
                                <div>
                                    <div className="flex flex-wrap items-center">
                                        <div className='w-full md:w-1/2'>
                                            <Image alt="App Screenshot" src={image} className='rounded-[5.3rem] pr-3' />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <div className='pl-4 flex flex-col space-y-4'>
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