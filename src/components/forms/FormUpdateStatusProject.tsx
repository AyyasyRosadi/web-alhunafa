'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Modal from '../templates/Modal'
import Message from '../templates/Message'
import Selector from '../fields/Selector'
import TextField from '../fields/TextField'
import useUpdateStatusProject from '@/hooks/query/useUpdateStatusProject'
import useAddVideo from '@/hooks/query/useAddVideo'
import useGetAllProjects from '@/hooks/query/useGetAllProjects'
import Loading from '../templates/Loading'
import UploadFile from '../fields/UploadFIle'
import { useCheckExstention } from '@/hooks/useCheckExstention'

export default function FormUpdateStatusProject({ data, show, close }: { data: any, show: boolean, close: () => void }) {
    const [selectedStatus, setSelectedStatus] = useState({ value: 1, label: 'تكتمل قريبا' })
    const [video, setVideo] = useState('')
    const [videoFile, setVideoFile] = useState<any>()
    const [video64, setVideo64] = useState('')
    const [imageFile, setImageFile] = useState<any>()
    const [image, setImage] = useState('')
    const [image64, setImage64] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)
    const optionsStatus = [
        { value: 1, label: 'تكتمل قريبا' },
        { value: 2, label: 'تم تنفيذ المشروع' },
    ]
    const HandleFile = (event: React.ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>, setBase64: Dispatch<SetStateAction<string>>, setFile: any,type:string) => {
        setValue(event?.target?.value)
        const file: any = event!.target!.files![0];
        let validate = useCheckExstention(file,type)
        setFile(file)
        if (file && validate) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    useGetAllProjects(status, 5, 1)
    const updatestatus = useUpdateStatusProject(
        () => {
            close()
            setShowMessage(true)
            setMessage('Succes')
            setStatus(true)
            setTimeout(() => {
                setShowMessage(false)
                setStatus(false)
            }, 3000)
            setImage('')
            setImage64('')
            setVideo('')
            setVideo64('')
            setVideoFile(null)
            setImageFile(null)
        },
        () => {
            close()
            setShowMessage(true)
            setMessage('Failed')
            setStatus(false)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
            setImage('')
            setImage64('')
            setVideo('')
            setVideo64('')
            setVideoFile(null)
            setImageFile(null)
        }
    )
    const sendVideo = useAddVideo(
        videoFile!,
        () => {
            console.log(data?.id)
            updatestatus.mutate({ id: data?.id, data: { status: selectedStatus?.value, image: image64.split(',')[1] } })
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
        console.log(data?.id)
        sendVideo.mutate({ id: data?.id })
        close()
    }
    useEffect(() => {
        if(show){
            setImage('')
            setImage64('')
            setVideo('')
            setVideo64('')
            setVideoFile(null)
            setImageFile(null)
        }
    }, [show])
    return (
        <>
            <Loading show={updatestatus?.isPending || sendVideo?.isPending} />
            <Message show={showMessage} message={message} succes={status} />
            <Modal title='نموذج إضافة مشروع' show={show} close={close} scroll>
                <div className='flex flex-col justify-between gap-3'>
                    <Selector instanceId='select-status' title='على التقدم' value={selectedStatus} setValue={setSelectedStatus} options={optionsStatus} />
                    <TextField right id='video' title='فيديو' type='file' value={video} setValue={(event: any) => HandleFile(event, setVideo, setVideo64, setVideoFile,'video')} />
                    <UploadFile title='صورة' preview={image64} value={image} setValue={(event: any) => HandleFile(event, setImage, setImage64, setImageFile,'image')} remove={() => {
                        setImage('')
                        setImage64('')
                    }} />
                    <button className=' py-2 w-[100%] rounded-md bg-base text-white' onClick={update}>يحفظ</button>
                </div>
            </Modal>
        </>
    )
}
