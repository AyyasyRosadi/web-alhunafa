import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function LandingPage({ image, title,children }: { image: StaticImport, title: string,children?:ReactNode }) {
    return (
        <section className="relative w-[100vw] h-[100vh] flex justify-center items-center object-cover">
            <Image placeholder="blur" className="absolute -z-10 object-cover object-center w-[100vw] h-[100vh]" src={image} alt="" />
            <div className="absolute w-[100vw] h-[100vh] bg-black bg-opacity-60 -z-10"></div>
            <h1 className="md:text-[50px] sm:text-[40px] xl:text-[70px] text-2xl text-white text-center">{title}</h1>
            <h1 className="md:text-[50px] sm:text-[40px] xl:text-[70px] text-2xl text-white text-center">{children}</h1>
        </section>
    )
}
