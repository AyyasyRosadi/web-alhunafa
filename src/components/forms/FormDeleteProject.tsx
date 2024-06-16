'use client'
import React, { useState } from 'react'
import Modal from '../templates/Modal'
import Message from '../templates/Message'
import useDeleteProject from '@/hooks/query/useDeleteProject'
import useGetAllProjects from '@/hooks/query/useGetAllProjects'
import Loading from '../templates/Loading'

export default function FormDeleteProject({ data, show, close }: { data: any, show: boolean, close: () => void }) {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    useGetAllProjects(status,5,1)
    const deleteProject = useDeleteProject(
        () => {
            close()
            setShowMessage(true)
            setMessage('Succes')
            setStatus(true)
            setTimeout(() => {
                setShowMessage(false)
                setStatus(false)
            }, 3000)
        },
        () => {
            close()
            setShowMessage(true)
            setMessage('Failed')
            setStatus(false)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }
    )
    const remove = () => {
        deleteProject.mutate(data.id)
        close()
    }
    const typeOptions = [
        { value: 1, label: 'ماركاس' },
        { value: 2, label: 'مسجد' },
        { value: 3, label: 'بئر' },
    ]
    return (
        <>
            <Loading show={deleteProject.isPending} />
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <div className='flex flex-col justify-between gap-5 font-bahij text-right'>
                    <h1>هل أنت متأكد أنك تريد حذف هذا المشروع؟</h1>
                    <div className='flex flex-col gap-3 text-right h-[80%]'>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.title}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>عنوان</h1>
                        </div>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.description}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>وصف</h1>
                        </div>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.type_id ? typeOptions?.find((dt) => dt.value === data?.type_id)?.label : ''}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>نوع</h1>
                        </div>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.status}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>حالة</h1>
                        </div>
                    </div>
                    <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={remove}>يزيل</button>
                </div>
            </Modal>
        </>
    )
}
