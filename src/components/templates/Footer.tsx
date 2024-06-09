'use client'
import React from 'react'
import Logo from "@/assets/images/whiteLogo.png"
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function Footer() {
    const navigation = useRouter()
    return (
        <div className='md:h-[35vh] bg-base flex md:justify-between items-center md:flex-row flex-col py-5 px-[5%] md:gap-0 gap-5 text-white font-bahij '>
            <div className='md:w-[33%] md:h-[50%] w-[100%] flex items-end flex-col text-right'>
                <h1 className='md:text-[30px] text-[20xp] text-right'>القائمة الرئيسية</h1>
                <h1 className='md:text-[15px] text-[10px]'>مدينة ماتارام جزيرة لومبوك محافطة نوسا تنجارى الغربية حمهورية إندونيسيا.
                    في بداية انطلاقها أسست معهدا دراسيا تحت مسمى &quot;معهد أبو هريرة الإسلامي&quot; ثم حصلت على اعتماد من قبل وزارة الخارجية الكويتية تحت رقم 3560 عام 2019 م</h1>
            </div>
            <div className='md:w-[33%] md:h-[50%] w-[100%] flex flex-col md:items-start items-end'>
                <div className='flex flex-col gap-4 items-end w-[100%]'>
                    <div className='flex gap-3'>
                        <BsInstagram className='md:w-7 w-5 cursor-pointer  md:h-7 h-5' />
                        <BsFacebook className='md:w-7 w-5  cursor-pointer md:h-7 h-5' />
                        <BsTwitterX className='md:w-7 w-5  cursor-pointer md:h-7 h-5' />
                    </div>
                    <h1 className='text-right md:text-md text-[10px]'>مؤسسة الحنفاء تأسست عام 2002 م الموافق 1423 هـ</h1>
                </div>
            </div>  
            <div className='md:w-[33%] flex justify-end items-center'>
                <Image placeholder='blur' loading='lazy' className='w-[45%] transition-all ease-out duration-300 rounded-full hover:scale-110 cursor-pointer' src={Logo} alt='' onClick={()=>navigation.push('/#1')} />
            </div>
        </div>
    )
}
