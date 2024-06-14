'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Map from '../templates/Map'
import TextField from '../fields/TextField'
import { FaSearch } from 'react-icons/fa'
import useGetMaps from '@/hooks/query/useGetMaps'
import useSearchLocation from '@/hooks/query/useSearchLocation'
import { ProjectAttributes } from '@/type'

export default function Maps() {
    const [titleKey, setTitleKey] = useState('')
    const [oneLocation, setOneLocation] = useState({})
    const [hasLocation, setHasLocation] = useState(false)
    const markers = useGetMaps(true)
    const point = markers?.data?.map((val: ProjectAttributes) => {
        return { id: val.id, position: { lat: parseFloat(val.lat), lng: parseFloat(val.long) }, title: val?.title, type: +val?.type_id, image: val?.image, description: val?.description, proposal: val?.proposal }
    })
    const searchMaps = useSearchLocation(titleKey)

    const handler = useCallback((event: KeyboardEvent, data: any) => {
        if (data && data?.length !== 0 && event?.key === 'Enter') {
            setOneLocation(data[0])
            setHasLocation(true)
            setTitleKey(data[0]?.title)
        }
        // eslint-disable-next-line 
    }, [])
    useEffect(() => {
        document.addEventListener('keydown', (event) => handler(event, searchMaps?.data));
        return () => document.removeEventListener("keydown", (event) => handler(event, searchMaps?.data));
        // eslint-disable-next-line 
    }, [searchMaps?.loading])
    return (
        <section id="4" className="h-[100vh] flex flex-col justify-center items-center relative font-bahij">
            <h1 className="md:text-4xl text-xl text-base">خريطة المشروع</h1>
            <div className='w-[90%] flex justify-end items-end my-2 gap-2 relative'>
                <TextField right id='خريطة' width='xl:w-[30%] md:w-[40%] w-[100%]' title='يبحث' value={titleKey} setValue={(event) => {
                    setTitleKey(event?.target?.value)
                    setOneLocation({})
                    setHasLocation(false)
                }} placeholder='أدخل اسم المشروع'>
                    <div className={` bg-white border border-base rounded-sm text-right ${searchMaps?.data?.length > 0 && titleKey?.length > 0 && !hasLocation ? 'absolute z-50 top-[105%] w-[100%]' : 'hidden'}`}>
                        {searchMaps?.data?.map((val: any, id: number) => (
                            <h1 onClick={() => {
                                setOneLocation(val)
                                setTitleKey(val.title)
                                setHasLocation(true)
                            }} key={id} className={` text-xs p-1 hover:bg-base hover:text-white cursor-pointer ${id < searchMaps?.data?.length - 1 ? 'border-b' : ''}`}>{val.title}</h1>
                        ))}
                    </div>
                </TextField>
            </div>
            <div className="w-[90%] h-[70%] rounded-3xl flex md:flex-row flex-col justify-center items-center">
                <Map markers={point} centers={oneLocation} />
            </div>
        </section>
    )
}
