'use client'
import LandingPage from '@/components/templates/LandingPage'
import React from 'react'
import Project from "@/assets/images/detailProject.jpg"
import Image from 'next/image'
import useGetDetailProject from '@/hooks/query/useGetDetailProject'
import { useParams } from 'next/navigation'
import { url } from '@/components/constant/Url'
import loadingImage from "@/assets/images/icon/loading.png"


const newUrl = 'https://api-alhunafa.diyaproject.id/stream'

const loaderProp = ({ src }: { src?: any }) => {
  return src;
}


export default function Page() {
  const { id } = useParams()
  const { data, loading } = useGetDetailProject(`${id}`)
  return (
    <div className='font-bahij text-right'>
      <LandingPage title='تفاصيل المشروع' image={Project} />
      <section className='p-[5%] flex flex-wrap justify-end gap-5'>
        <div className='flex flex-col items-end gap-7 w-[100%]'>
          <h1 className='md:text-[40px] text-[35px]  text-base'>{data?.title}</h1>
          <div className='flex flex-wrap xl:justify-end gap-5 w-[100%]'>
            {data ?
              data?.historical_projects?.map((val: any, id: number) => (
                <div key={id} className='xl:w-[48%] w-[100%]'>
                  <video className='w-[100%] h-[100%]' controls preload="none" controlsList='nodownload'>
                    <source src={val?.video ? `${url}/${val?.video}` : `#`} type="video/mp4" />
                  </video>
                </div>
              ))
              :
              <Image loading="lazy" src={loadingImage} alt="" className='w-12 h-12 animate-spin' />
            }
            {data ?
              data?.historical_projects?.map((val: any, id: number) => (
                <div key={id} className='xl:w-[48%] w-[100%]'>
                  <video className='w-[100%] h-[100%]' controls preload="none" controlsList='nodownload'>
                    <source src={val?.video ? `${newUrl}/${val?.video}` : `#`} type="video/mp4" />
                  </video>
                </div>
              ))
              :
              <Image loading="lazy" src={loadingImage} alt="" className='w-12 h-12 animate-spin' />
            }
          </div>
          <div className='flex flex-col gap-2'>
            <p>{data?.description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
