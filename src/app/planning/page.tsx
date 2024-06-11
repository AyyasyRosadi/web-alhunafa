'use client'
import LandingPage from '@/components/templates/LandingPage'
import React, { useState } from 'react'
import Planning from "@/assets/images/planning.jpg"
import { planning } from '@/components/constant/Projects'
import Image from 'next/image'
import PDF from "@/assets/images/icon/pdf.png"
import Modal from '@/components/templates/Modal'
import PdfViewer from '@/components/templates/PdfViewer'

export default function Page() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Planning} title='بحاجة للتبرع' />
            <section className='p-[5%] flex flex-wrap justify-end items-center gap-5'>
                {planning?.map((value: string, id: number) => (
                    <div key={id} onClick={() => setShowModal(true)} className='flex justify-between items-center shadow-xl rounded-xl border border-base text-right  px-4 py-6 xl:w-[32%] md:w-[45%] h-[100%] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>
                        <Image src={PDF} alt='' className='w-[15%]' />
                        <h1 className='text-xl'>{value}</h1>
                    </div>
                ))}
            </section>
            <Modal show={showModal} close={() => setShowModal(false)} title='تفاصيل المشروع' scroll>
               <PdfViewer url='http://192.168.1.8:8080/file/38b48fb0-2876-43ba-ac5f-3151f1645e1a.pdf'/>
            </Modal>
        </div>
    )
}
