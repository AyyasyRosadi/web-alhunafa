'use client'
import Selector from '@/components/fields/Selector'
import TextField from '@/components/fields/TextField'
import useAddFile from '@/hooks/query/useAddFile'
import React, { Dispatch, SetStateAction, useState } from 'react'

export default function Page() {
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
        // console.log({ title, lat, long, proposal64, image64 })
        console.log(proposal64.split(','))
        console.log(image64.split(','))
        saveFile.mutate({ title, description: desc, lat: parseFloat(lat), long: parseFloat(long), proposal: proposal64.split(',')[1], image: image64.split(',')[1], type_id: typeId?.value })
        console.log({ title, description: desc, lat: parseFloat(lat), long: parseFloat(long), proposal: proposal64.split(',')[1], image: image64.split(',')[1], type_id: typeId?.value })
    }
    const typeOptions = [
        { value: "1", label: 'Markaz' },
        { value: "2", label: 'Mosque' },
        { value: "3", label: 'Well' },
    ]
    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen'>
            <div className='w-[30%] flex flex-col gap-5'>
                <TextField id='title' title='Judul' value={title} setValue={(key) => setTitle(key?.target?.value)} />
                <TextField id='description' title='Deskripsi' value={desc} setValue={(key) => setDesc(key?.target?.value)} />
                <TextField id='lat' title='Lat' value={lat} setValue={(key) => setLat(key?.target?.value)} />
                <TextField id='long' title='Long' value={long} setValue={(key) => setLong(key?.target?.value)} />
                <TextField id='proposal' title='Proposal' type='file' value={proposal} setValue={(event) => convertToBase64(event, setProposal, setProposal64)} />
                <TextField id='gambar' title='Gambar' type='file' value={image} setValue={(event) => convertToBase64(event, setImage, setImage64)} />
                <Selector instanceId='type' title='Tipe' value={typeId} setValue={setTypeId} options={typeOptions} />
                <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={save}>Simpan</button>
            </div>
        </div>
    )
}
