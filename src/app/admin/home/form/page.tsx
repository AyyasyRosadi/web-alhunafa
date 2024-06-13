'use client'
import { typeOptions } from '@/components/constant/Type'
import Selector from '@/components/fields/Selector'
import TextField from '@/components/fields/TextField'
import UploadFile from '@/components/fields/UploadFIle'
import useAddFile from '@/hooks/query/useAddFile'
import { useSession } from 'next-auth/react'
import React, { Dispatch, SetStateAction, useState } from 'react'

export default function Page() {
    const session = useSession()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [proposal, setProposal] = useState('');
    const [image, setImage] = useState('')
    const [proposal64, setProposal64] = useState('')
    const [image64, setImage64] = useState('')
    const [typeId, setTypeId] = useState({ value: 1, label: 'Markaz' })
    const saveFile = useAddFile(
        () => {
            alert('succes')
            // setTitle('')
            // setLat('')
            // setLong('')
            // setProposal('')
            // setImage('')
            // setProposal64('')
            // setImage64('')
        },
        () => {
            alert('gagal')
            // setTitle('')
            // setLat('')
            // setLong('')
            // setProposal('')
            // setImage('')
            // setProposal64('')
            // setImage64('')
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
    }
    return (
        <div className='flex flex-col justify-center items-center w-screen p-[5%]'>
            <div className='w-[40%] flex flex-col gap-5 p-5 shadow-xl rounded-xl'>
                <TextField right id='title' title='عنوان' value={title} setValue={(key) => setTitle(key?.target?.value)} />
                <TextField right id='description' title='وصف' value={desc} setValue={(key) => setDesc(key?.target?.value)} />
                <TextField right id='lat' title='خط العرض / Lat' value={lat} setValue={(key) => setLat(key?.target?.value)} />
                <TextField right id='long' title='خط الطول / Long' value={long} setValue={(key) => setLong(key?.target?.value)} />
                <TextField right id='proposal' title='عرض' type='file' value={proposal} setValue={(event) => convertToBase64(event, setProposal, setProposal64)} />
                <UploadFile title='صورة' preview={image64} value={image} setValue={(event) => convertToBase64(event, setImage, setImage64)} remove={() => {
                    setImage('')
                    setImage64('')
                }} />
                <Selector instanceId='type' title='Tipe' value={typeId} setValue={setTypeId} options={typeOptions} />
                <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={save}>يحفظ</button>
            </div>
        </div>
    )
}
