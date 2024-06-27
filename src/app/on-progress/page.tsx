'use client'
import React, { useState } from 'react'
import Onprogress from "@/assets/images/onprogress.jpg"
import LandingPage from '@/components/templates/LandingPage'
import Card from '@/components/templates/Card'
import useGetProjectByStatus from '@/hooks/query/useGetProjectByStatus'
import { url } from '@/components/constant/Url'
import { ProjectAttributes } from '@/type'
import Pagination from '@/components/templates/Pagination'


export default function Page() {
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(15)
    const { data, loading } = useGetProjectByStatus(1, size, page)
    const total_pages = data?.total_pages
    const typeOptions = [
        { value: 1, label: 'مركز' },
        { value: 2, label: 'مسجد' },
        { value: 3, label: 'بئر' },
    ]
    console.log(data)
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Onprogress} title='تكتمل قريبا' />
            <section className='p-[5%] flex flex-wrap justify-end items-start gap-5'>
                {data?.rows?.length !== 0 && data?.rows?.map((value: ProjectAttributes, id: number) => (
                    <Card key={id} src={value?.image ? `${url}/file/${value.image}`:`#`} title={value.title} location={`/detail/${value?.id}`}>
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
