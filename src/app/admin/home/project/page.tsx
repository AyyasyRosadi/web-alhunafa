'use client'
import React, { useState } from 'react'
import TableData from '../Table'
import useGetMaps from '@/hooks/query/useGetMaps'
import useGetAllProjects from '@/hooks/query/useGetAllProjects'
import { typeOptions } from '@/components/constant/Type'
import Loading from '@/components/templates/Loading'
import { HiPencil, HiTrash } from 'react-icons/hi'
import FormAddProject from '@/components/forms/FormAddProject'
import FormDeleteProject from '@/components/forms/FormDeleteProject'
import FormUpdateProject from '@/components/forms/FormUpdateProject'
import TextField from '@/components/fields/TextField'
import useSearchLocation from '@/hooks/query/useSearchLocation'

export default function Page() {
    const [showFormAddProject, setShowFormAddProject] = useState(false)
    const [showFormUpdateProject, setShowFormUpdateProject] = useState(false)
    const [showFormDeleteProject, setShowFormDeleteProject] = useState(false)
    const [oneProject, setOneProject] = useState({})
    const [keySearch, setKeySearch] = useState('')
    const head = [
        { title: 'فعل', type: 'string' },
        { title: 'حالة', type: 'string' },
        { title: 'نوع', type: 'string' },
        { title: 'وصف', type: 'string' },
        { title: 'عنوان', type: 'string' },
        { title: 'رقم', type: 'string' },
    ]
    const { data, loading } = keySearch?.length > 2 ? useSearchLocation(keySearch) : useGetAllProjects(true)
    return (
        <>
            <FormAddProject show={showFormAddProject} close={() => setShowFormAddProject(false)} />
            <FormUpdateProject show={showFormUpdateProject} close={() => setShowFormUpdateProject(false)} data={oneProject} />
            <FormDeleteProject show={showFormDeleteProject} close={() => setShowFormDeleteProject(false)} data={oneProject} />
            <TableData head={head} title='المشاريع' data={data} clickAdd={() => setShowFormAddProject(true)} filters={
                <div>
                    <TextField id='search' title='الكلمات الدالة' value={keySearch} setValue={(event) => setKeySearch(event?.target?.value)} right />
                </div>
            }>
                {data?.length !== 0 && data?.map((value: any, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3 flex gap-2 justify-end'>
                            <HiPencil className='w-8 h-8 bg-sky-400 hover:bg-sky-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneProject(value)
                                setShowFormUpdateProject(true)
                            }} />
                            <HiTrash className='w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneProject(value)
                                setShowFormDeleteProject(true)
                            }} />
                        </td>
                        <td className='px-6 py-3'>{value.status}</td>
                        <td className='px-6 py-3'>{value.type_id ? typeOptions?.find((dt) => dt.value = value.type_id)?.label : ''}</td>
                        <td className='px-6 py-3'>{value.description}</td>
                        <td className='px-6 py-3'>{value.title}</td>
                        <td className='px-6 py-3'>{index + 1}</td>
                    </tr>
                ))}
            </TableData>
            <Loading show={loading} />
        </>
    )
}
