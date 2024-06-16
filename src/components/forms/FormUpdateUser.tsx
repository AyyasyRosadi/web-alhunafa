'use client'
import React, { useEffect, useState } from 'react'
import Modal from '../templates/Modal'
import Message from '../templates/Message'
import TextForm from '../fields/TextForm'
import Loading from '../templates/Loading'
import useGetAllUser from '@/hooks/query/useGetAllUser'
import useResetPassword from '@/hooks/query/useResetPassword'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


export default function FormUpdateUser({ data, show, close }: { data: any, show: boolean, close: () => void }) {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                user_name: yup.string().required(),
                email: yup.string().email().required(),
                password: yup.string().required(),
            })
        )
    })
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    useGetAllUser(status)
    const updateUser = useResetPassword(
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
    const update = (e: FieldValues) => {
        updateUser.mutate({ id: data?.id, data: e })
        close()
    }
    useEffect(() => {
        method.reset({ email: data.email, user_name: data.user_name })
        // eslint-disable-next-line 
    }, [show])
    return (
        <>
            <Loading show={updateUser?.isPending} />
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <form className='flex flex-col gap-3' onSubmit={method.handleSubmit(update)}>
                    <TextForm method={method} methodName='user_name' right id='title' title='اسم المستخدم' />
                    <TextForm method={method} methodName='email' right id='description' title='بريد إلكتروني' />
                    <TextForm method={method} methodName='password' type='password' right id='lat' title='كلمة المرور' />
                    <button type='submit' className=' py-2 w-[100%] rounded-md bg-base text-white'>يحفظ</button>
                </form>
            </Modal>
        </>
    )
}
