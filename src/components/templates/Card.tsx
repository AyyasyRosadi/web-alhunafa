import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function Card({ src, title, children }: { src: StaticImport, title: string, children?: ReactNode }) {
    return (
        <div className="relative flex flex-col justify-between px-4 py-6 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl md:w-[30%] h-[100%]">
            <Image placeholder='blur' loading='lazy' src={src} alt="" className="relative object-bottom object-cover rounded-xl w-[100%] h-[75%]" />
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-bahij md:text-2xl text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h4>
            </div>
            <div className="bg-base py-2 rounded-lg cursor-pointer hover:bg-blue-800 hover:scale-105 transition-all ease-in-out duration-300">
                <h1 className="text-white text-center md:text-md text-sm">استكشاف المزيد</h1>
            </div>
            {children}
        </div>)
}
