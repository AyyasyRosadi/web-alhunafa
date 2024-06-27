'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Modal from '../templates/Modal'
import TextForm from '../fields/TextForm'
import Message from '../templates/Message'
import useGetAllProjects from '@/hooks/query/useGetAllProjects'
import Loading from '../templates/Loading'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import SelectForm from '../fields/SelectForm'
import useEditProject from '@/hooks/query/useEditProject'
import UploadFile from '../fields/UploadFIle'
import TextAreaForm from '../fields/TextAreaForm'
import { useCheckExstention } from '@/hooks/useCheckExstention'

export default function FormEditProject({ show, close, data }: { show: boolean, close: () => void, data: any }) {
    const typeOptions = [
        { value: 1, label: 'مركز' },
        { value: 2, label: 'مسجد' },
        { value: 3, label: 'بئر' },
    ]
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                title: yup.string().required(),
                description: yup.string().min(8, 'min 8 characters').required(),
                lat: yup.string().required(),
                long: yup.string().required(),
                type_id: yup.number().required(),
                image: yup.string().required()
            })
        )
    })
    const [image, setImage] = useState('')
    const [image64, setImage64] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    useGetAllProjects(status, 5, 1)
    const editProject = useEditProject(
        () => {
            close()
            setShowMessage(true)
            setMessage('Succes')
            setStatus(true)
            setTimeout(() => {
                setShowMessage(false)
                setStatus(false)
            }, 3000)
            method.reset({ title: '', description: '', lat: '', long: '', type_id: 0 })
            setImage('')
            setImage64('')

        },
        () => {
            close()
            setShowMessage(true)
            setMessage('Failed')
            setStatus(false)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
            method.reset({ title: '', description: '', lat: '', long: '', type_id: 0 })
            setImage('')
            setImage64('')
        }
    )
    const ConvertToBase64 = (event: React.ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>, setBase64: Dispatch<SetStateAction<string>>, key: any) => {
        setValue(event?.target?.value)
        const file = event!.target!.files![0];
        const validate = useCheckExstention(file,key)
        if (file && validate) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result);
                method.setValue(key, reader?.result.split(',')[1])
            };
            reader.readAsDataURL(file);
        }
    }

    const save = (e: FieldValues) => {
        editProject?.mutate({ id: data.id, data: { ...e, lat: parseFloat(e.lat), long: parseFloat(e.long), type_id: `${e.type_id}` } })
        close()
    }
    useEffect(() => {
        method.reset({ title: data.title, description: data?.description, lat: data?.lat, long: data?.long, type_id: +data?.type_id })
        // eslint-disable-next-line 
    }, [data])
    return (
        <>
            <Loading show={editProject.isPending} />
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <form className='flex flex-col gap-3' onSubmit={method.handleSubmit(save)}>
                    <TextForm method={method} methodName='title' right id='add-title' title='عنوان' />
                    <TextAreaForm method={method} methodName='description' right id='add-description' title='وصف' />
                    <TextForm method={method} methodName='lat' right id='add-lat' title='خط العرض / Lat' />
                    <TextForm method={method} methodName='long' right id='add-long' title='خط الطول / Long' />
                    <SelectForm instanceId='add-type' title='نوع' method={method} methodName='type_id' options={typeOptions} />
                    <UploadFile title='صورة' preview={image64} value={image} setValue={(event: any) => ConvertToBase64(event, setImage, setImage64, 'image')} remove={() => {
                        setImage('')
                        setImage64('')
                    }} />
                    <button type='submit' className=' py-2 w-[100%] rounded-md bg-base text-white'>يحفظ</button>
                </form>
            </Modal>
        </>
    )
}
