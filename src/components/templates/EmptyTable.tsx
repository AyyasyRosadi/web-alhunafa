import React, { ReactNode } from 'react'
import { FcSurvey } from "react-icons/fc";


export default function EmptyTable():ReactNode {
    return (
        <div className='flex flex-col justify-center items-center w-[100%] h-[100%]'>
            <FcSurvey className='w-36 h-36' />
            <h1 className='font-bahij font-bold text-sky-800 text-2xl'>لم يتم العثور على بيانات</h1>
        </div>
    )
}
