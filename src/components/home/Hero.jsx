export const Hero = () => {
    return (
        <>
            <main className='min-h-screen w-full'>
                <div className='w-full md:container mx-auto flex flex-col items-start justify-center h-screen px-3 md:px-12'>
                    <h2 className='font-semibold text-[2.7rem] md:text-8xl leading-loose'>Samuel Osemeke</h2>
                    <h4 className='font-semibold text-3xl md:text-6xl leading-10 pl-4 md:pl-24'>Frontend Developer</h4>
                    <p className='font-extralight text-md sm:text-xl w-full md:max-w-2xl pl-4 md:pl-24 pt-6 md:pt-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati cumque corporis iste fuga, temporibus blanditiis aliquam id inventore et quod nisi repellendus aperiam excepturi dolorum ipsa assumenda magnam amet.
                    </p>

                    <div className="pt-10 pl-4 md:pl-24 flex md:hidden">
                        <div className="space-x-4">
                            <a href="#">GH</a>
                            <a href="#">LN</a>
                            <a href="#">X</a>
                            <a href="#">IN</a>
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )
}