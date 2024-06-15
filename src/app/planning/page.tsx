'use client'
import LandingPage from '@/components/templates/LandingPage'
import React, { useCallback, useEffect, useState } from 'react'
import Planning from "@/assets/images/planning.jpg"
import { planning } from '@/components/constant/Projects'
import Image from 'next/image'
import PDF from "@/assets/images/icon/pdf.png"
import Modal from '@/components/templates/Modal'
import PdfViewer from '@/components/templates/PdfViewer'
import { url } from '@/components/constant/Url'
import useGetProjectByStatus from '@/hooks/query/useGetProjectByStatus'
import { ProjectAttributes } from '@/type'
import Pagination from '@/components/templates/Pagination'

export default function Page() {
    const [showModal, setShowModal] = useState(false)
    const [savePdf, setSavePdf] = useState('')
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)
    const { data, loading } = useGetProjectByStatus(0, size, page)
    const total_pages = data?.total_pages
    const closePdf = useCallback((event: KeyboardEvent) => {
        if (event?.key === 'Escape') {
            setShowModal(false)
        }
        // eslint-disable-next-line 
    }, [showModal])
    useEffect(() => {
        document.addEventListener('keydown', closePdf)
        return () => document.removeEventListener('keydown', closePdf)
        // eslint-disable-next-line
    }, [])
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Planning} title='بحاجة للتبرع' />
            <section className='p-[5%] flex flex-wrap justify-end items-center gap-5'>
                <Pagination page={page} allPage={total_pages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />
                {data?.rows?.length !== 0 && data?.rows?.map((value: ProjectAttributes, id: number) => (
                    <div key={id} onClick={() => {
                        setSavePdf(value.proposal)
                        setShowModal(true)
                    }} className='flex justify-between items-center shadow-xl rounded-xl border border-base text-right  px-4 py-6 xl:w-[32%] w-[100%] h-[100%] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>
                        <Image src={PDF} alt='' className='w-[15%]' />
                        <h1 className='text-xl'>{value.title}</h1>
                    </div>
                ))}
            </section>
            <Modal show={showModal} close={() => setShowModal(false)} title='تفاصيل المشروع' scroll>
                <PdfViewer url={savePdf ? `${url}/${savePdf}`:`#`} />
            </Modal>
        </div>
    )
}
