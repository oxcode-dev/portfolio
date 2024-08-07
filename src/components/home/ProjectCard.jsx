import Image from 'next/image'

export const ProjectCard = ({ project }) => {
    return (
        <div className="w-full border-2 border-slate-900/70 hover:shadow-md hover:shadow-slate-800/70 md:rounded-[7.3rem] md:p-12 group">
            <div>
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2">
                        <Image alt="App Screenshot" src={project.image} width={500} height={500} className='md:rounded-[5.3rem] sm:pr-3 md:h-96 md:object-cover grayscale group-hover:grayscale-0'/>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='p-4 md:pl-6 flex flex-col space-y-4'>
                            <h4 className='font-medium text-lg md:text-xl'>{project?.title || 'N/A'}</h4>
                            <div>
                                <p className='font-extralight text-sm'>
                                    {project?.description || 'N/A'}   
                                </p>
                            </div>
                            <div className='inline-flex flex-wrap text-xs uppercase font-extralight'>
                                {
                                    project?.tags.map((tag, key) => (
                                        <span className='pr-2 font-medium py-0.5' key={key}>{tag || 'N/A'} </span>
                                    ))
                                }
                            </div>
                            <div className='inline-flex space-x-4 flex-wrap uppercase font-extralight'>
                                {
                                    project?.source_code_link && 
                                    <a className='text-gray-500 hover:text-gray-300 hover:scale-110' href={project?.source_code_link || '#'} target='blank'>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                }
                                {
                                    project?.site_link && 
                                    <a className='text-gray-500 hover:text-gray-300 hover:scale-110' href={project?.site_link || '#'} target='blank'>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}