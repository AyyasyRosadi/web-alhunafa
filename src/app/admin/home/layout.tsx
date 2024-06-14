import HeaderAdmin from '@/components/templates/HeaderAdmin'
import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <HeaderAdmin>
                <div className='flex justify-center items-start'>
                    {children}
                </div>
            </HeaderAdmin>
        </div>
    )
}
