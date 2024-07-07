import { ProjectCard } from './ProjectCard'
import { projects } from '../../constants/index'
export const Projects = () => {
    return (
        <div className='min-h-screen relative' id="projects">
            <div className='absolute right-0 -top-12 opacity-50'>
                <h2 className='text-6xl md:text-[8rem] text-white/10 uppercase'>Projects</h2>
            </div>
            <div className='container mx-auto flex flex-col items-center px-6 sm:px-8 md:px-16 py-16 md:py-24 md:pt-36'>
                <h3 className='font-semibold text-xl md:text-3xl'>
                    Turning ideas into digital solutions...
                </h3>

                <div className="py-10 mx-auto w-full md:max-w-3xl flex flex-col space-y-12">
                    {
                        projects.map((project, key) => (
                            <ProjectCard project={project} key={key} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}