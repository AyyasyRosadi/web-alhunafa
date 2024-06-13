import Image from "next/image"
import loadingImage from "@/assets/images/icon/loading.png"
import { ReactNode } from "react"

type LoadingAttributes = {
    show: boolean
}

export default function Loading({ show }: LoadingAttributes): ReactNode {
    return (
        <div className={`w-[100%] h-[100%] absolute top-0 left-0 p-4  justify-center items-center z-50 ${show ? 'flex bg-white bg-opacity-40' : 'hidden'}`}>
            <Image loading="lazy" src={loadingImage} alt="" className='w-12 h-12 animate-spin' />
        </div>
    )
}
