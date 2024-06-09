'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "@/assets/images/logo.png"
import WhiteLogo from "@/assets/images/whiteLogo.png"
import useScrollVIew from '@/hooks/useScrollVIew'
import { useRouter } from 'next/navigation'
import { BsViewStacked } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'

export default function Header() {
    const showHeader = useScrollVIew(150)
    const navigation = useRouter()
    const [showMenuMobile, setShowMenuMobile] = useState(false)
    return (
        <div className={`fixed top-0 z-50 w-[100vw] flex md:justify-end justify-between gap-10 py-5 px-[10%] items-center ${showHeader ? 'bg-base' : 'bg-transparent'} transition-colors ease-out duration-300`}>
            <ul className={`font-bahij md:flex gap-10 md:text-lg text-xs hidden ${showHeader ? 'text-white' : 'text-base'} transition-colors ease-in-out duration-300`}>
                <li className='cursor-pointer' onClick={() => navigation.push('/about-us')}>عن المؤسسة</li>
                <li className='cursor-pointer' onClick={() => navigation.push('/')}>الرئسية</li>
            </ul>
            <div className={`fixed z-50 top-0 w-[70vw] h-screen transition-all ease-in-out duration-300 bg-white font-bahij p-2 ${showMenuMobile ? 'right-0' : '-right-[70vw]'}`}>
                <div className='flex justify-end items-center gap-3'>
                    <h1>خيار</h1>
                    <MdOutlineClose className='w-7 h-7' onClick={() => setShowMenuMobile(false)} />
                </div>
                <ul className={`font-bahij space-y-3 text-right mt-10 flex flex-col gap-3`}>
                    <li className='cursor-pointer' onClick={() => {
                        navigation.push('/')
                        setShowMenuMobile(false)
                    }}>الرئسية</li>
                    <li className='cursor-pointer' onClick={() => {
                        navigation.push('/about-us')
                        setShowMenuMobile(false)
                    }}>عن المؤسسة</li>
                </ul>
            </div>
            <Image className='md:w-[5%] w-[18%]  transition-all ease-out duration-300 rounded-full hover:scale-125 cursor-pointer' src={showHeader ? WhiteLogo : Logo} alt='' onClick={() => navigation.push('/#1')} />
            <div className='md:hidden block text-white'>
                <BsViewStacked className='w-5 h-5' onClick={() => setShowMenuMobile(!showMenuMobile)} />
            </div>
        </div>
    )
}
