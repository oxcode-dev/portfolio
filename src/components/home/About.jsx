import Image from 'next/image'

const image = '/mine.jpg'

export const About = () => {
    return ( 
        <>
            <div className='min-h-screen'>
                <div className='container mx-auto flex flex-wrap items-center px-16 py-24'>
                    <div className='w-full md:w-1/2'>
                        <Image alt="Personal Shot" src={image} width={500} height={500} />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='pl-4 flex flex-col space-y-4 md:space-y-6'>
                            <h3 className='font-semibold text-xl md:text-3xl'>
                                Building the future, one line of code at a time...
                            </h3>
                            <p className='font-extralight text-md sm:text-lg w-full'>
                                Hello there, I&apos;m Oxcode - a frontend engineer and technical writer with a passion for creating digital experiences 
                                that are both beautiful and accessible. My mission is to build websites and applications that delight users, while 
                                also making them easy to use and navigate for everyone.
                            </p>
                            <p className='font-extralight text-md sm:text-lg w-full'>
                                With Over four(4) years of experience in frontend development, I specialize in creating responsive, user-friendly 
                                interfaces using ReactJS, NextJS, VueJS, BootstrapCSS, TailwindCSS, and NuxtJS. I pay close attention to detail, always 
                                striving to make sure that every interaction is smooth, intuitive, and visually appealing. 
                                I&apos;m also a strong advocate for web accessibility, ensuring that all my projects are accessible to all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}