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

const loaderProp = ({ src }: { src?: any }) => {
    return src;
}


export default function Page() {
    const [showModal, setShowModal] = useState(false)
    const [savePdf, setSavePdf] = useState('')
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(15)
    const { data, loading } = useGetProjectByStatus(0, size, page)
    const total_pages = data?.total_pages
    return (
        <div className='font-bahij overflow-x-hidden'>
            <LandingPage image={Planning} title='بحاجة للتبرع' />
            <section className='px-[5%] py-[3%] flex flex-wrap justify-end items-center gap-5'>
                {data?.rows?.length !== 0 && data?.rows?.map((value: ProjectAttributes, id: number) => (
                    <div key={id} onClick={() => {
                        setSavePdf(value.proposal)
                        setShowModal(true)
                    }} className="relative flex flex-col px-4 py-6 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl xl:w-[32%] md:w-[45%] h-[35rem] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer overflow-y-auto scrollbar-hide">
                        <Image placeholder='blur' loading='lazy' blurDataURL='../../assets/images/example.jpg' src={`${url}/file/${value.image}`} loader={loaderProp} width={1000} height={1000} unoptimized alt={''} className="relative object-bottom object-cover rounded-xl w-[100%] h-[90%]" />
                        <div className="p-6 text-center">
                            <h4 className="block font-bahij text-base md:text-2xl text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {value.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </section>
            <div className='py-[2%]'>
                <Pagination noOptions page={page} allPage={total_pages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />
            </div>
            <Modal show={showModal} close={() => setShowModal(false)} title='تفاصيل المشروع' scroll>
                <PdfViewer url={savePdf ? `${url}/file/${savePdf}` : `#`} />
            </Modal>
        </div>
    )
}
