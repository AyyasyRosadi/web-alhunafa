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

export default function Page() {
    const [showModal, setShowModal] = useState(false)
    const [savePdf, setSavePdf] = useState('')
    const { data, loading } = useGetProjectByStatus(0)
    const closePdf = useCallback((event: KeyboardEvent) => {
        if(event?.key === 'Escape'){
            setShowModal(false)
        }
    }, [showModal])
    useEffect(() => {
        document.addEventListener('keydown', closePdf)
        return () => document.removeEventListener('keydown', closePdf)
    }, [])
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Planning} title='بحاجة للتبرع' />
            <section className='p-[5%] flex flex-wrap justify-end items-center gap-5'>
                {data?.map((value: ProjectAttributes, id: number) => (
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
                <PdfViewer url={`${url}/file/${savePdf}`} />
            </Modal>
        </div>
    )
}
