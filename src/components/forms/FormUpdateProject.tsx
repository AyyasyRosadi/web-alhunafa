'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Modal from '../templates/Modal'
import Message from '../templates/Message'
import { typeOptions } from '../constant/Type'
import Selector from '../fields/Selector'
import UploadFile from '../fields/UploadFIle'
import TextField from '../fields/TextField'
import useUpdateProject from '@/hooks/query/useUpdateProject'
import useAddVideo from '@/hooks/query/useAddVideo'
import { send } from 'process'

export default function FormUpdateProject({ data, show, close }: { data: any, show: boolean, close: () => void }) {
    const [selectedStatus, setSelectedStatus] = useState({ value: 1, label: 'Progress' })
    const [video, setVideo] = useState('')
    const [videoFile, setVideoFile] = useState()
    const [video64, setVideo64] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    const optionsStatus = [
        { value: 1, label: 'On-Progress' },
        { value: 2, label: 'Finished' },
    ]
    const handleVideo = (event: React.ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>, setBase64: Dispatch<SetStateAction<string>>, setFile: any) => {
        setValue(event?.target?.value)
        const file: any = event!.target!.files![0];
        setFile(file)
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    const updatestatus = useUpdateProject(
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
    const sendVideo = useAddVideo(
        videoFile!,
        () => {
            updatestatus.mutate({ id: data?.id, data: { status: selectedStatus?.value } })
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
    const update = () => {
        sendVideo.mutate({id:data?.id})
        close()
    }
    return (
        <>
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <div className='flex flex-col justify-between gap-3'>
                    <Selector instanceId='select-status' title='على التقدم' value={selectedStatus} setValue={setSelectedStatus} options={optionsStatus} />
                    <TextField right id='video' title='فيديو' type='file' value={video} setValue={(event: any) => handleVideo(event, setVideo, setVideo64, setVideoFile)} />
                    <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={update}>يحفظ</button>
                </div>
            </Modal>
        </>
    )
}
