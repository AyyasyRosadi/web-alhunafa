'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Selector from '../fields/Selector';


export default function Pagination({ page, allPage, setPage, value, setValue }: { page: number, allPage: number, setPage: Dispatch<SetStateAction<number>>, value: number, setValue: (data: { value: string | number, label: string | number }) => void }) {
    const [pageNow, setPageNow] = useState(page)
    const previousPage = () => {
        if (pageNow > 1) {
            setPageNow((e) => e - 1)
        }
    }
    const nextPage = () => {
        if (pageNow < allPage) {
            setPageNow((e) => e + 1)
        }
    }
    useEffect(() => {
        setPage(pageNow)
    }, [pageNow, setPage, page])
    useEffect(() => {
        setPageNow(1)
    }, [value])
    const paginationOptions = [
        { value: "", label: "All" },
        { value: 5, label: 5 },
        { value: 10, label: 10 },
        { value: 20, label: 20 },
        { value: 50, label: 50 },
        { value: 100, label: 100 },
        { value: 500, label: 500 },
        { value: 1000, label: 1000 },
    ]
    return (
        <div className='h-[100%] flex justify-end items-end w-[100%]'>
            <div className='flex md:flex-row flex-col gap-3 items-end'>
                <Selector instanceId='select-pagination' value={{ value, label: value }} title='Ditampilkan' options={paginationOptions} setValue={setValue} />
                <div className='flex gap-3 items-end justify-end'>
                    <IoMdArrowDropleft className='w-8 h-8 text-sky-600 cursor-pointer border border-sky-600 rounded-full hover:bg-sky-100' onClick={previousPage} />
                    <div className='flex gap-1 my-auto font-montserrat text-sm text-gray-800'>
                        <h1>{pageNow}</h1>
                        <h1>/</h1>
                        <h1>{allPage}</h1>
                    </div>
                    <IoMdArrowDropright className='w-8 h-8 text-sky-600 cursor-pointer border border-sky-600 rounded-full hover:bg-sky-100' onClick={nextPage} />
                </div>
            </div>
        </div>
    )
}
