'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

export default function Card({ src, title, location, children }: { src: StaticImport, title: string, location?: string, children?: ReactNode }) {
    const { push } = useRouter()
    return (
        <div onClick={() => location && push(location)} className="relative flex flex-col px-4 py-6 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl xl:w-[32%] md:w-[45%] h-[100%] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
            <Image placeholder='blur' loading='lazy' src={src} alt="" className="relative object-bottom object-cover rounded-xl w-[100%] h-[90%]" />
            <div className="p-6 text-center">
                <h4 className="block font-bahij md:text-2xl text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h4>
            </div>
            {children}
        </div>)
}
