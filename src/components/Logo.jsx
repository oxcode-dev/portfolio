import Image from "next/image"
import LogoImg from './../../public/logo.png'

export const Logo =() => {
    const logo = 'Oxc</>de'
    return (
        <div className="flex items-center">
            <Image src={LogoImg} className="w-12" />
            <h2 className="text-xl font-medium">{logo}</h2>
        </div>
    )
}