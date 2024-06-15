'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Modal from '../templates/Modal'
import TextField from '../fields/TextField'
import TextForm from '../fields/TextForm'
import useAddNewProject from '@/hooks/query/useAddFile'
import { typeOptions } from '../constant/Type'
import UploadFile from '../fields/UploadFIle'
import Selector from '../fields/Selector'
import Message from '../templates/Message'
import useGetAllProjects from '@/hooks/query/useGetAllProjects'
import Loading from '../templates/Loading'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import SelectForm from '../fields/SelectForm'

export default function FormAddProject({ show, close }: { show: boolean, close: () => void }) {
    const method = useForm({
        mode:'all',
        resolver:yupResolver(
            yup.object().shape({
                title:yup.string().required(),
                description:yup.string().min(8,'min 8 characters').required(),
                lat:yup.string().required(),
                long:yup.string().required(),
                proposal:yup.string().required(),
                image:yup.string().required(),
                type_id:yup.string().required(),
            })
        )
    })
    const [proposal,setProposal] = useState('')
    const [proposal64, setProposal64] = useState('')
    const [image, setImage] = useState('')
    const [image64, setImage64] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    useGetAllProjects(status,5,1)
    const saveFile = useAddNewProject(
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
            setProposal('')
            setImage('')
            setProposal64('')
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
            method.reset()
            setProposal('')
            setImage('')
            setProposal64('')
            setImage64('')
        }
    )
    const convertToBase64 = (event: React.ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>, setBase64: Dispatch<SetStateAction<string>>,key:any) => {
        setValue(event?.target?.value)
        const file = event!.target!.files![0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result);
                method.setValue(key,reader?.result.split(',')[1])
            };
            reader.readAsDataURL(file);
        }
    }
    const save = (e:FieldValues) => {
        saveFile?.mutate({...e,lat:parseFloat(e.lat),long:parseFloat(e.long)})
        // saveFile.mutate({ title, description: desc, lat: parseFloat(lat), long: parseFloat(long), proposal: proposal64.split(',')[1], image: image64.split(',')[1], type_id: typeId?.value })
        close()
    }
    return (
        <>
            <Loading show={saveFile.isPending} />
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <form className='flex flex-col gap-3' onSubmit={method.handleSubmit(save)}>
                    <TextForm method={method} methodName='title' right id='add-title' title='عنوان'  />
                    <TextForm method={method} methodName='description' right id='add-description' title='وصف'/>
                    <TextForm method={method} methodName='lat' right id='add-lat' title='خط العرض / Lat'/>
                    <TextForm method={method} methodName='long' right id='add-long' title='خط الطول / Long'/>
                    <TextField right id='add-proposal' title='عرض' type='file' value={proposal} setValue={(event) => convertToBase64(event, setProposal, setProposal64,'proposal')} />
                    <UploadFile title='صورة' preview={image64} value={image} setValue={(event: any) => convertToBase64(event, setImage, setImage64,'image')} remove={() => {
                        setImage('')
                        setImage64('')
                    }} />
                    <SelectForm instanceId='add-type' title='نوع' method={method} methodName='type_id' options={typeOptions} />
                    <button type='submit' className=' py-2 w-[100%] rounded-md bg-base text-white'>يحفظ</button>
                </form>
            </Modal>
        </>
    )
}
