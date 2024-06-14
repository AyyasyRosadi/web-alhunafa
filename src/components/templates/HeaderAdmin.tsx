'use client'
import React, { ReactNode, useState } from 'react'
import Logo from "@/assets/images/logo.png"
import Image from 'next/image'
import { TiThMenuOutline } from 'react-icons/ti'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function HeaderAdmin({children}:{children:ReactNode}) {
    const [showMenu, setShowMenu] = useState(false)
    const {push} = useRouter()
    return (
        <div>
            <div className='fixed top-0 w-screen bg-base h-[12vh] flex justify-between items-center px-[3%] py-4'>
                <div>
                    <TiThMenuOutline className='w-7 h-7 text-white' onClick={() => setShowMenu(!showMenu)} />
                </div>
                <div>
                    <Image className='w-16 h-16 bg-white rounded-full' src={Logo} alt='' />
                </div>
            </div>
            <div className={`fixed top-[12vh] shadow-xl border-r border-r-slate-300 ${showMenu ? 'left-0' : '-left-[15vw]'} w-[15vw] h-[88vh]  transition-all ease-in-out duration-300`}>
                <div className=' flex flex-col gap-3 p-2'>
                    <div className='p-2 hover:bg-base hover:text-white rounded-md cursor-pointer' onClick={()=>push('/admin/home/project')}>Projects</div>
                    <div className='p-2 hover:bg-base hover:text-white rounded-md cursor-pointer' onClick={()=>push('/admin/home/user')}>User</div>
                    <div className='p-2 hover:bg-base hover:text-white rounded-md cursor-pointer' onClick={()=>{
                        signOut()
                    }}>Log Out</div>
                </div>
            </div>
            <div className={`fixed top-[12vh] right-0 ${showMenu ? 'w-[85vw]' : 'w-screen'} transition-all ease-in-out duration-300 h-[88vh] p-[5%]`}>
                {children}
            </div>
        </div>
    )
}
