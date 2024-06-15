import Button from '@/components/fields/Button'
import EmptyTable from '@/components/templates/EmptyTable'
import Table from '@/components/templates/Table'
import TitleTable from '@/components/templates/TitleTable'
import { usePathname } from 'next/navigation'
import React, { MouseEventHandler, ReactNode } from 'react'

type TableData = {
    title: string;
    clickAdd?: MouseEventHandler<HTMLButtonElement>;
    data?: any;
    head?: { title: string, type: string }[];
    children: ReactNode;
    pages?: ReactNode;
    calculate?: ReactNode;
    filters?: ReactNode;
    noButton?: boolean;
    buttonName?: string;
}

export function Location() {
    const pathname = usePathname()
    const pathanamePart = pathname.split('/')
    pathanamePart.shift()
    pathanamePart.reverse()
    return (
        <div key={''} className='flex'>
            {pathanamePart.map((e, i) => {
                if (i === pathanamePart.length - 1) {
                    return <div key={i}>
                        <div className='bg-sky-600 rounded-full p-2 text-xs text-white'>{e}</div>
                    </div>
                } else {
                    return <div key={i} className='flex'>
                        <div className='bg-sky-600 rounded-full p-2 text-xs text-white'>{e}</div>
                        <div className='w-3 h-1 bg-sky-600 my-auto'></div>
                    </div>
                }
            })}
        </div>
    )
}

export default function TableData({ title, clickAdd, children, data, head, calculate, filters, noButton, buttonName, pages }: TableData): ReactNode {
    return (
        <div className='flex flex-col w-[95%] items-end'>
            <Location />
            <div className='border bg-white px-7 py-10 full rounded-sm shadow-md mt-[2vh] w-[100%]'>
                <div className='flex justify-between mb-5 h-[10%]'>
                    <div className='flex gap-2 md:flex-row flex-col'>
                        <div className='mt-[1px]'>
                            {noButton ? <></> : <Button title={buttonName ? buttonName : 'تألف'} click={clickAdd!} />}
                        </div>
                        <div className='bg-white'>
                            {data?.length! > 0 ?
                                <>
                                    {pages}
                                </>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className='flex xl:flex-row flex-col items-end xl:gap-5 gap-4'>
                        {filters}
                        <TitleTable title={title} />
                    </div>
                </div>
                <div className='h-[80%]'>
                    {data?.length! > 0 ?
                        <Table head={head!}>
                            {children}
                        </Table>
                        :
                        <EmptyTable />
                    }
                </div>
                {calculate}
            </div>
        </div>
    )
}
