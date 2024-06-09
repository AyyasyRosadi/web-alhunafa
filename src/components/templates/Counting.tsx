import Count from '@/hooks/useCount'
import React, { ReactNode } from 'react'

export default function Counting({ count, title, icon, end }: { count: number, title: string, icon: ReactNode, end?: boolean }) {
    return (
        <div className={`md:w-[20%] w-[80%] h-[50%] flex flex-col justify-center items-center gap-5 md:m-0 m-5 md:p-0 p-2 ${end ? '' : 'md:border-r md:border-r-base md:border-b-0 border-b border-b-base'}`}>
            <h1 className="md:text-[50px] text-[30px]">
                <Count end={count} />
            </h1>
            <div className='flex gap-3 items-center'>
                {icon}
                <h1 className="text-xl">{title}</h1>
            </div>
        </div>
    )
}
