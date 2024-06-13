import Count from '@/hooks/Count'
import React, { ReactNode } from 'react'

export default function Counting({ count, title, icon, end }: { count: number, title: string, icon: ReactNode, end?: boolean }) {
    return (
        <div className={`xl:w-[20%] w-[80%] h-[50%] flex flex-col justify-center items-center gap-5 xl:m-0 m-5 p-2 ${end ? '' : 'xl:border-r xl:border-r-base xl:border-b-0 border-b border-b-base'}`}>
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
