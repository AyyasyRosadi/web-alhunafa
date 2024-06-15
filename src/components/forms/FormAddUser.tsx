'use client'
import React, { useState } from 'react'
import Modal from '../templates/Modal'
import TextForm from '../fields/TextForm'
import Message from '../templates/Message'
import Loading from '../templates/Loading'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAddNewUser from '@/hooks/query/useAddUser'
import useGetAllUser from '@/hooks/query/useGetAllUser'

export default function FormAddUser({ show, close }: { show: boolean, close: () => void }) {
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
    const saveFile = useAddNewUser(
        () => {
            close()
            setShowMessage(true)
            setMessage('Succes')
            setStatus(true)
            setTimeout(() => {
                setShowMessage(false)
                setStatus(false)
            }, 3000)
            method.reset()
        },
        () => {
            close()
            setShowMessage(true)
            setMessage('Failed')
            setStatus(false)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
            method.reset()
        }
    )
    const save = (e: FieldValues) => {
        saveFile?.mutate(e)
        // saveFile.mutate({ title, description: desc, lat: parseFloat(lat), long: parseFloat(long), proposal: proposal64.split(',')[1], image: image64.split(',')[1], type_id: typeId?.value })
        close()
    }
    return (
        <>
            <Loading show={saveFile.isPending} />
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <form className='flex flex-col gap-3' onSubmit={method.handleSubmit(save)}>
                    <TextForm method={method} methodName='user_name' right id='title' title='اسم المستخدم' />
                    <TextForm method={method} methodName='email' right id='description' title='بريد إلكتروني' />
                    <TextForm method={method} methodName='password' type='password' right id='lat' title='كلمة المرور' />
                    <button type='submit' className=' py-2 w-[100%] rounded-md bg-base text-white'>يحفظ</button>
                </form>
            </Modal>
        </>
    )
}
