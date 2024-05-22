import { technologies } from './../../constants/index'
import Image from 'next/image'

export const Tech = () => {
    return (
        <div className='min-h-screen relative'>
            <div className='absolute right-0 -top-12 opacity-50'>
                <h2 className='text-6xl md:text-[8rem] text-white/10 uppercase'>Tools</h2>
            </div>
            <div className='container mx-auto flex flex-col items-center px-6 sm:px-8 md:px-16 py-16 md:py-24 md:pt-36'>
                <h3 className='font-semibold text-xl md:text-2xl text-center inline-flex flex-col space-y-2'>
                    <span>“A good tool improves the way you work. A great tool improves the way you think.”</span>
                    <span>Jeff Duntemann</span>
                </h3>

                <div className="py-20 mx-auto w-full md:max-w-4xl flex flex-col space-y-12">
                    <div className="flex flex-wrap justify-center">
                        {
                            technologies.map((technology, key) => (
                                <div className="relative p-2 group" key={key}>
                                    <div className="absolute -top-10 min-w-32 justify-center hidden sm:group-hover:flex">
                                        <div className="bg-gray-800 text-center text-pretty text-white rounded min-w-16 mx-auto p-2 py-1">
                                            {technology?.title || 'N/A'}
                                        </div>
                                    </div>
                                    <div className="w-16 sm:w-32 flex justify-center items-center border border-gray-600 p-2 sm:p-6 rounded-lg cursor-pointer">
                                        <Image alt={technology.title} src={technology.icon} width={200} height={200} className='group-hover:grayscale-0 md:grayscale w-8 sm:w-12 h-8 sm:h-12 object-contain' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
               
            </div>
        </div>
    )
}