import React, { ReactNode } from 'react'
import { FcSurvey } from "react-icons/fc";


export default function EmptyTable():ReactNode {
    return (
        <div className='flex flex-col justify-center items-center w-[100%] h-[100%]'>
            <FcSurvey className='w-36 h-36' />
            <h1 className='font-montserrat font-bold text-sky-800 text-2xl'>Tidak Ada Data</h1>
        </div>
    )
}
