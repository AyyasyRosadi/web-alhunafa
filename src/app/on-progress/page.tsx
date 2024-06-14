'use client'
import React from 'react'
import Onprogress from "@/assets/images/onprogress.jpg"
import LandingPage from '@/components/templates/LandingPage'
import Card from '@/components/templates/Card'
import useGetProjectByStatus from '@/hooks/query/useGetProjectByStatus'
import { url } from '@/components/constant/Url'
import { typeOptions } from '@/components/constant/Type'
import { ProjectAttributes } from '@/type'


export default function Page() {
    const { data, loading } = useGetProjectByStatus(1)
    console.log(data)
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Onprogress} title='تكتمل قريبا' />
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
