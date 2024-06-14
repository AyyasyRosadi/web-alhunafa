'use client'
import React from 'react'
import Completed from "@/assets/images/completed.jpg"
import LandingPage from '@/components/templates/LandingPage'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Card from '@/components/templates/Card'
import useGetProjectByStatus from '@/hooks/query/useGetProjectByStatus'
import { ProjectAttributes } from '@/type'
import { url } from '@/components/constant/Url'
import { typeOptions } from '@/components/constant/Type'

interface ProjectImplementedAttributes {
    image: StaticImport,
    title: string,
    content: string
}

export default function Page() {
    const { data, loading } = useGetProjectByStatus(2)
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Completed} title='تم تنفيذ المشروع' />
            <section className='p-[5%] flex flex-wrap justify-end items-start gap-5'>
                {data?.length !== 0 && data?.map((value: ProjectAttributes, id: number) => (
                    <Card key={id} src={`${url}/${value.image}`} title={value.title}>
                        <>
                            <h1 className='text-center text-base mb-3'>( {typeOptions?.find((val) => val.value === `${value.type_id}`)?.label} )</h1>
                            <h1 className='text-right'>{value.description}</h1>
                        </>
                    </Card>
                ))}

            </section>
        </div>
    )
}
