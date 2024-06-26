import HeaderAdmin from '@/components/templates/HeaderAdmin'
import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className='overflow-y-auto'>
            <HeaderAdmin>
                <div className='flex justify-center items-start overflow-y-auto'>
                    {children}
                </div>
            </HeaderAdmin>
        </div>
    )
}
