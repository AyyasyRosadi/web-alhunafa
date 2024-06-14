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

export default function Page() {
    const [showFormAddProject, setShowFormAddProject] = useState(false)
    const [showFormUpdateProject, setShowFormUpdateProject] = useState(false)
    const [showFormDeleteProject, setShowFormDeleteProject] = useState(false)
    const [oneIdProject, setOneIdProject] = useState({})
    const head = [
        { title: 'No', type: 'string' },
        { title: 'Title', type: 'string' },
        { title: 'Description', type: 'string' },
        { title: 'Type', type: 'string' },
        { title: 'Status', type: 'string' },
        { title: 'Aksi', type: 'string' },
    ]
    const { data, loading } = useGetAllProjects(true)
    return (
        <>
            <FormAddProject show={showFormAddProject} close={() => setShowFormAddProject(false)} />
            <FormUpdateProject show={showFormUpdateProject} close={() => setShowFormUpdateProject(false)} data={oneIdProject} />
            <FormDeleteProject show={showFormDeleteProject} close={() => setShowFormDeleteProject(false)} data={oneIdProject} />
            <TableData head={head} title='Projects' data={data} clickAdd={() => setShowFormAddProject(true)} >
                {data?.length !== 0 && data?.map((value: any, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{index + 1}</td>
                        <td className='px-6 py-3'>{value.title}</td>
                        <td className='px-6 py-3'>{value.description}</td>
                        <td className='px-6 py-3'>{value.type_id ? typeOptions?.find((dt) => dt.value = value.type_id)?.label : ''}</td>
                        <td className='px-6 py-3'>{value.status}</td>
                        <td className='px-6 py-3 flex gap-2'>
                            <HiPencil className='w-8 h-8 bg-sky-400 hover:bg-sky-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneIdProject(value)
                                setShowFormUpdateProject(true)
                            }} />
                            <HiTrash className='w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneIdProject(value)
                                setShowFormDeleteProject(true)
                            }} />
                        </td>
                    </tr>
                ))}
            </TableData>
            <Loading show={loading} />
        </>
    )
}
