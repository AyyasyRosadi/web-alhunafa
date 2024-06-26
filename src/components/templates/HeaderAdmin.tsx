'use client'
import React, { ReactNode, useState } from 'react'
import Logo from "@/assets/images/logo.png"
import Image from 'next/image'
import { TiThMenuOutline } from 'react-icons/ti'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { GrProjects } from 'react-icons/gr'
import { FaRegUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

export default function HeaderAdmin({ children }: { children: ReactNode }) {
    const [showMenu, setShowMenu] = useState(false)
    const { push } = useRouter()
    return (
        <div>
            <div className='fixed top-0 w-screen bg-base h-[12vh] flex justify-between items-center px-[3%] py-4'>
                <div>
                    <Image className='w-16 h-16 bg-white rounded-full' src={Logo} alt='' />
                </div>
                <div>
                    <TiThMenuOutline className='w-7 h-7 text-white' onClick={() => setShowMenu(!showMenu)} />
                </div>
            </div>
            <div className={`fixed top-[12vh] z-50 shadow-xl border-r border-r-slate-300 bg-white ${showMenu ? 'right-0' : 'xl:-right-[15vw] -right-[80vw]'} xl:w-[15vw] w-[80vw] h-[88vh]  transition-all ease-in-out duration-300`}>
                <div className=' flex flex-col gap-3 p-2'>
                    <div className='p-2 hover:bg-base hover:text-white rounded-md cursor-pointer flex justify-end items-center gap-4' onClick={() => {
                        setShowMenu(false)
                        push('/admin/home/project')
                    }}>
                        <h1>المشاريع</h1>
                        <GrProjects className='w-4 h-4' />
                    </div>
                    <div className='p-2 hover:bg-base hover:text-white rounded-md cursor-pointer flex justify-end items-center gap-4' onClick={() => {
                        setShowMenu(false)
                        push('/admin/home/user')
                    }}>
                        <h1>المستخدمين</h1>
                        <FaRegUser className='w-4 h-4' />
                    </div>
                    <div className='p-2 hover:bg-base hover:text-white rounded-md cursor-pointer flex justify-end items-center gap-4' onClick={() => {
                        signOut()
                    }}>
                        <h1>تسجيل خروج</h1>
                        <BiLogOut className='w-4 h-4' />
                    </div>
                </div>
            </div>
            <div className={`fixed top-[12vh] left-0 ${showMenu ? 'w-[85vw]' : 'w-screen'} transition-all ease-in-out duration-300 h-[88vh] p-[5%] overflow-y-auto scrollbar-hide`}>
                {children}
            </div>
        </div>
    )
}
