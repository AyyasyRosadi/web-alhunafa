'use client'
import React, { useState } from 'react'
import Modal from '../templates/Modal'
import Message from '../templates/Message'
import useDeleteProject from '@/hooks/query/useDeleteProject'
import { typeOptions } from '../constant/Type'

export default function FormDeleteProject({ data, show, close }: { data: any, show: boolean, close: () => void }) {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    const deleteProject = useDeleteProject(
        () => {
            close()
            setShowMessage(true)
            setMessage('Succes')
            setStatus(true)
            setTimeout(() => {
                setShowMessage(false)
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
    return (
        <>
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <div className='flex flex-col justify-between gap-3'>
                    <h1>Are you sure want to delete this project?</h1>
                    <div className='flex flex-col gap-3 text-right h-[80%]'>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.title}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>Title</h1>
                        </div>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.description}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>Description</h1>
                        </div>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.type_id ? typeOptions?.find((dt) => dt.value === data?.type_id)?.label : ''}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>Type</h1>
                        </div>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.status}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>Status</h1>
                        </div>
                    </div>
                    <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={remove}>يزيل</button>
                </div>
            </Modal>
        </>
    )
}
