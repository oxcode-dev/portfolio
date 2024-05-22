export const TechCard = () => {
    return (
        <div className="relative p-2 group">
            <div className="absolute -top-10 min-w-40 justify-center hidden group-hover:flex">
                <div className="bg-gray-800 text-white rounded min-w-20 mx-auto p-2 py-1">
                    BootstrapCSS
                </div>
            </div>
            <div className="w-40 text-center border border-white p-6 rounded-lg cursor-pointer">
                tailwind
            </div>
        </div>
    )
}