'use client'
import React, { useState } from 'react'
import Modal from '../templates/Modal'
import Message from '../templates/Message'
import Loading from '../templates/Loading'
import useDeleteUser from '@/hooks/query/useDeleteUser'
import useGetAllUser from '@/hooks/query/useGetAllUser'

export default function FormDeleteUser({ data, show, close }: { data: any, show: boolean, close: () => void }) {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    useGetAllUser(status)
    const deleteUser = useDeleteUser(
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
        deleteUser.mutate(data.id)
        close()
    }
    return (
        <>
            <Loading show={deleteUser.isPending} />
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <div className='flex flex-col justify-between gap-5 font-bahij text-right'>
                    <h1>هل أنت متأكد أنك تريد حذف هذا المستخدم؟</h1>
                    <div className='flex flex-col gap-3 text-right h-[80%]'>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.user_name}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>اسم المستخدم</h1>
                        </div>
                        <div className='w-[100%] flex gap-3'>
                            <h1 className='w-[75%]'>{data?.email}</h1>
                            <h1 className='w-[5%]'>:</h1>
                            <h1 className='w-[20%]'>بريد إلكتروني</h1>
                        </div>
                    </div>
                    <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={remove}>يزيل</button>
                </div>
            </Modal>
        </>
    )
}
