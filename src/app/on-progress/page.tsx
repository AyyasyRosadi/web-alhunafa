import React from 'react'
import Onprogress from "@/assets/images/onprogress.jpg"
import LandingPage from '@/components/templates/LandingPage'
import { projects } from '@/components/constant/Projects'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Card from '@/components/templates/Card'

interface ProjectImplementedAttributes {
    image: StaticImport,
    title: string,
    content: string
}

export default function Page() {
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Onprogress} title='أثناء التطوير' />
            <section className='p-[5%] flex flex-wrap justify-end items-center gap-5'>
                {projects?.map((value: ProjectImplementedAttributes, id: number) => (
                    <Card key={id} src={value.image} title={value.title}>
                        <h1 className='text-right'>{value.content}</h1>
                    </Card>
                ))}

            </section>
        </div>
    )
}
