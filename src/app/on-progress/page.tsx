'use client'
import React, { useState } from 'react'
import Onprogress from "@/assets/images/onprogress.jpg"
import LandingPage from '@/components/templates/LandingPage'
import Card from '@/components/templates/Card'
import useGetProjectByStatus from '@/hooks/query/useGetProjectByStatus'
import { url } from '@/components/constant/Url'
import { typeOptions } from '@/components/constant/Type'
import { ProjectAttributes } from '@/type'
import Pagination from '@/components/templates/Pagination'


export default function Page() {
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)
    const { data, loading } = useGetProjectByStatus(1, size, page)
    const total_pages = data?.total_pages
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Onprogress} title='تكتمل قريبا' />
            <section className='p-[5%] flex flex-wrap justify-end items-start gap-5'>
                <Pagination page={page} allPage={total_pages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />
                {data?.rows?.length !== 0 && data?.rows?.map((value: ProjectAttributes, id: number) => (
                    <Card key={id} src={value?.image ? `${url}/${value.image}`:`#`} title={value.title}>
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
