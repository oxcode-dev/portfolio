'use client'
import Image from 'next/image'
export const TechCard = ({ technology }) => {
    return (
        <div className="relative p-2 group">
            <div className="absolute -top-10 min-w-32 justify-center hidden sm:group-hover:flex">
                <div className="bg-gray-800 text-center text-pretty text-white rounded min-w-16 mx-auto p-2 py-1">
                    {technology?.title || 'N/A'}
                </div>
            </div>
            <div className="w-16 sm:w-32 flex justify-center items-center border border-gray-600 p-2 sm:p-6 rounded-lg cursor-pointer group-hover:scale-110 hover:shadow-xl shadow-[#fff]">
                <Image alt={technology.title} src={technology.icon} width={200} height={200} className='group-hover:grayscale-0 md:grayscale w-8 sm:w-12 h-8 sm:h-12 object-contain' />
            </div>
        </div>
    )
}