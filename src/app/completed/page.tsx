'use client'
import React, { useState } from 'react'
import Completed from "@/assets/images/completed.jpg"
import LandingPage from '@/components/templates/LandingPage'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Card from '@/components/templates/Card'
import useGetProjectByStatus from '@/hooks/query/useGetProjectByStatus'
import { ProjectAttributes } from '@/type'
import { url } from '@/components/constant/Url'
import Pagination from '@/components/templates/Pagination'

interface ProjectImplementedAttributes {
    image: StaticImport,
    title: string,
    content: string
}

export default function Page() {
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(15)
    const { data, loading } = useGetProjectByStatus(2, size, page)
    const total_pages = data?.total_pages
    const typeOptions = [
        { value: 1, label: 'مركز' },
        { value: 2, label: 'مسجد' },
        { value: 3, label: 'بئر' },
    ]
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Completed} title='تم تنفيذ المشروع' />
            <section className='p-[5%] flex flex-wrap justify-end items-start gap-5'>
                {data?.rows?.length !== 0 && data?.rows?.map((value: ProjectAttributes, id: number) => (
                    <Card key={id} src={`${url}/file/${value.image}`} title={value.title} location={`/detail/${value?.id}`}>
                        <>
                            <h1 className='text-center text-base mb-3'>( {typeOptions?.find((val) => val.value === +value.type_id)?.label} )</h1>
                        </>
                    </Card>
                ))}
            </section>
            <div className='py-[2%]'>
                <Pagination noOptions page={page} allPage={total_pages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />
            </div>
        </div>
    )
}
