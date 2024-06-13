'use client'
import LandingPage from '@/components/templates/LandingPage'
import React from 'react'
import Project from "@/assets/images/detailProject.jpg"
import Image from 'next/image'
import useGetDetailProject from '@/hooks/query/useGetDetailProject'
import { useParams } from 'next/navigation'

export default function Page() {
  const { id } = useParams()
  const { data, loading } = useGetDetailProject(`${id}`)
  return (
    <div className='font-bahij text-right'>
      <LandingPage title='تفاصيل المشروع' image={Project} />
      <section className='p-[5%] flex flex-wrap justify-end gap-5'>
        <div className='flex flex-col items-end gap-7'>
          <h1 className='md:text-[40px] text-[35px]  text-base'>عنوان المشروع</h1>
          <div className='flex flex-wrap gap-2 justify-end'>
            {data?.length !== 0 && data?.map((_:{}, id: number) => (
              <div key={id} className='xl:w-[32%] md:w-[45%]'>
                <Image key={id} src={Project} alt='' className='' />
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ القرن السادس عشر، عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لصنع نموذج كتاب. لقد صمدت ليس فقط لخمسة قرون، بل قفزت أيضًا إلى التنضيد الإلكتروني، وبقيت دون تغيير بشكل أساسي. انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي على مقاطع لوريم إيبسوم، ومؤخراً مع ظهور برامج النشر المكتبي مثل Aldus PageMaker والتي تضمنت إصدارات لوريم إيبسوم.</p>
            <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ القرن السادس عشر، عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لصنع نموذج كتاب. لقد صمدت ليس فقط لخمسة قرون، بل قفزت أيضًا إلى التنضيد الإلكتروني، وبقيت دون تغيير بشكل أساسي. انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق Letraset التي تحتوي على مقاطع لوريم إيبسوم، ومؤخراً مع ظهور برامج النشر المكتبي مثل Aldus PageMaker والتي تضمنت إصدارات لوريم إيبسوم.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
