'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import Modal from '../templates/Modal'
import TextField from '../fields/TextField'
import useAddFile from '@/hooks/query/useAddFile'
import { typeOptions } from '../constant/Type'
import UploadFile from '../fields/UploadFIle'
import Selector from '../fields/Selector'
import Message from '../templates/Message'

export default function FormAddProject({ show, close }: { show: boolean, close: () => void }) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [proposal, setProposal] = useState('');
    const [image, setImage] = useState('')
    const [proposal64, setProposal64] = useState('')
    const [image64, setImage64] = useState('')
    const [typeId, setTypeId] = useState({ value: "1", label: 'Markaz' })
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    const saveFile = useAddFile(
        () => {
            close()
            setShowMessage(true)
            setMessage('Succes')
            setStatus(true)
            setTimeout(()=>{
                setShowMessage(false)
            },3000)
            setTitle('')
            setLat('')
            setLong('')
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
            setTimeout(()=>{
                setShowMessage(false)
            },3000)
            setTitle('')
            setLat('')
            setLong('')
            setProposal('')
            setImage('')
            setProposal64('')
            setImage64('')
        }
    )
    const convertToBase64 = (event: React.ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>, setBase64: Dispatch<SetStateAction<string>>) => {
        setValue(event?.target?.value)
        const file = event!.target!.files![0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    const save = () => {
        saveFile.mutate({ title, description: desc, lat: parseFloat(lat), long: parseFloat(long), proposal: proposal64.split(',')[1], image: image64.split(',')[1], type_id: typeId?.value })
        close()
    }
    return (
        <>
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <div className='flex flex-col gap-3'>
                    <TextField right id='title' title='عنوان' value={title} setValue={(key) => setTitle(key?.target?.value)} />
                    <TextField right id='description' title='وصف' value={desc} setValue={(key) => setDesc(key?.target?.value)} />
                    <TextField right id='lat' title='خط العرض / Lat' value={lat} setValue={(key) => setLat(key?.target?.value)} />
                    <TextField right id='long' title='خط الطول / Long' value={long} setValue={(key) => setLong(key?.target?.value)} />
                    <TextField right id='proposal' title='عرض' type='file' value={proposal} setValue={(event) => convertToBase64(event, setProposal, setProposal64)} />
                    <UploadFile title='صورة' preview={image64} value={image} setValue={(event: any) => convertToBase64(event, setImage, setImage64)} remove={() => {
                        setImage('')
                        setImage64('')
                    }} />
                    <Selector instanceId='type' title='Tipe' value={typeId} setValue={setTypeId} options={typeOptions} />
                    <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={save}>يحفظ</button>
                </div>
            </Modal>
        </>
    )
}
