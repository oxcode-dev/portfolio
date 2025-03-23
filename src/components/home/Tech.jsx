import { technologies } from './../../constants/index'
import { TechCard } from './TechCard'

export const Tech = () => {
    return (
        <div className='min-h-screen relative'>
            <div className='absolute right-0 -top-12 opacity-10'>
                <h2 className='text-6xl md:text-[8rem] uppercase opacity-40'>Tools</h2>
            </div>
            <div className='container mx-auto flex flex-col items-center px-6 sm:px-8 md:px-16 py-16 md:py-24'>
                <h3 className='font-semibold text-xl md:text-2xl text-center inline-flex flex-col space-y-2'>
                    <span>“A good tool improves the way you work. A great tool improves the way you think.”</span>
                    <span>Jeff Duntemann</span>
                </h3>

                <div className="py-20 mx-auto w-full md:max-w-4xl flex flex-col">
                    <div className="flex flex-wrap justify-center">
                        {
                            technologies.map((technology, key) => (
                               <TechCard technology={technology} key={key} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}