'use client'
import React, { useState } from 'react'
import TableData from '../Table'
import useGetAllProjects from '@/hooks/query/useGetAllProjects'
import Loading from '@/components/templates/Loading'
import { HiPencil, HiTrash } from 'react-icons/hi'
import FormAddProject from '@/components/forms/FormAddProject'
import FormDeleteProject from '@/components/forms/FormDeleteProject'
import FormUpdateStatusProject from '@/components/forms/FormUpdateStatusProject'
import TextField from '@/components/fields/TextField'
import useGetProjectByTitle from '@/hooks/query/useGetProjectByTitle'
import Pagination from '@/components/templates/Pagination'
import { IoNewspaperOutline } from 'react-icons/io5'
import FormEditProject from '@/components/forms/FormEditProject'

export default function Page() {
    const [showFormAddProject, setShowFormAddProject] = useState(false)
    const [showFormEditProject, setShowFormEditProject] = useState(false)
    const [showFormUpdateStatusProject, setShowFormUpdateStatusProject] = useState(false)
    const [showFormDeleteProject, setShowFormDeleteProject] = useState(false)
    const [oneProject, setOneProject] = useState({})
    const [keySearch, setKeySearch] = useState('')
    const head = [
        { title: 'فعل', type: 'string' },
        { title: 'حالة', type: 'string' },
        { title: 'نوع', type: 'string' },
        { title: 'خط الطول/long', type: 'string' },
        { title: 'خط العرض/lat', type: 'string' },
        { title: 'وصف', type: 'string' },
        { title: 'عنوان', type: 'string' },
        { title: 'رقم', type: 'string' },
    ]
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)
    const { data, loading } = keySearch?.length > 2 ? useGetProjectByTitle(keySearch) : useGetAllProjects(true, size, page)
    const projects = keySearch?.length > 2 ? data : data?.rows
    const total_pages = keySearch?.length > 2 ? 1 : data?.total_pages
    const typeOptions = [
        { value: 1, label: 'ماركاس' },
        { value: 2, label: 'مسجد' },
        { value: 3, label: 'بئر' },
    ]
    return (
        <>
            <FormAddProject show={showFormAddProject} close={() => setShowFormAddProject(false)} />
            <FormEditProject show={showFormEditProject} close={() => setShowFormEditProject(false)} data={oneProject} />
            <FormUpdateStatusProject show={showFormUpdateStatusProject} close={() => setShowFormUpdateStatusProject(false)} data={oneProject} />
            <FormDeleteProject show={showFormDeleteProject} close={() => setShowFormDeleteProject(false)} data={oneProject} />
            <TableData head={head} title='المشاريع' data={projects} clickAdd={() => setShowFormAddProject(true)} filters={
                <div>
                    <TextField id='search' title='الكلمات الدالة' value={keySearch} setValue={(event) => setKeySearch(event?.target?.value)} right />
                </div>
            }
                pages={
                    <Pagination page={page} allPage={total_pages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />
                }
            >
                {projects?.length !== 0 && projects?.map((value: any, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3 flex gap-2 justify-end'>
                            <IoNewspaperOutline className='w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneProject(value)
                                setShowFormUpdateStatusProject(true)
                            }} />

                            <HiPencil className='w-8 h-8 bg-sky-400 hover:bg-sky-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneProject(value)
                                setShowFormEditProject(true)
                            }} />
                            <HiTrash className='w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneProject(value)
                                setShowFormDeleteProject(true)
                            }} />
                        </td>
                        <td className='px-6 py-3'>{value.status}</td>
                        <td className='px-6 py-3'>{value.type_id ? typeOptions[+value.type_id - 1].label : ''}</td>
                        <td className='px-6 py-3'>{value.long}</td>
                        <td className='px-6 py-3'>{value.lat}</td>
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
