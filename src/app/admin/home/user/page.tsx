'use client'
import React, { useState } from 'react'
import TableData from '../Table'
import Loading from '@/components/templates/Loading'
import { HiPencil, HiTrash } from 'react-icons/hi'
import FormDeleteProject from '@/components/forms/FormDeleteProject'
import FormUpdateProject from '@/components/forms/FormUpdateProject'
import TextField from '@/components/fields/TextField'
import useGetUserByUsrname from '@/hooks/query/useGetUserByUsrname'
import useGetAllUser from '@/hooks/query/useGetAllUser'
import FormAddUser from '@/components/forms/FormAddUser'
import FormUpdateUser from '@/components/forms/FormUpdateUser'
import FormDeleteUser from '@/components/forms/FormDeleteUser'

export default function Page() {
    const [showFormAddUser, setShowFormAddUser] = useState(false)
    const [showFormUpdateUser, setShowFormUpdateUser] = useState(false)
    const [showFormDeleteUser, setShowFormDeleteUser] = useState(false)
    const [oneUser, setOneUser] = useState({})
    const [keySearch, setKeySearch] = useState('')
    const head = [
        { title: 'فعل', type: 'string' },
        { title: 'بريد إلكتروني', type: 'string' },
        { title: 'اسم المستخدم', type: 'string' },
        { title: 'رقم', type: 'string' },
    ]
    const { data, loading } = keySearch?.length > 2 ? useGetUserByUsrname(keySearch) : useGetAllUser(true)
    return (
        <>
            <FormAddUser show={showFormAddUser} close={() => setShowFormAddUser(false)} />
            <FormUpdateUser show={showFormUpdateUser} close={() => setShowFormUpdateUser(false)} data={oneUser} />
            <FormDeleteUser show={showFormDeleteUser} close={() => setShowFormDeleteUser(false)} data={oneUser} />
            <TableData head={head} title='مستخدم' data={data} clickAdd={() => setShowFormAddUser(true)} filters={
                <div>
                    <TextField id='search' title='الكلمات الدالة' value={keySearch} setValue={(event) => setKeySearch(event?.target?.value)} right />
                </div>
            }>
                {data?.length !== 0 && data?.map((value: any, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3 flex gap-2 justify-end'>
                            <HiPencil className='w-8 h-8 bg-sky-400 hover:bg-sky-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneUser(value)
                                setShowFormUpdateUser(true)
                            }} />
                            <HiTrash className='w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneUser(value)
                                setShowFormDeleteUser(true)
                            }} />
                        </td>
                            <td className='px-6 py-3'>{value.email}</td>
                            <td className='px-6 py-3'>{value.user_name}</td>
                            <td className='px-6 py-3'>{index + 1}</td>
                    </tr>
                ))}
            </TableData>
            <Loading show={loading} />
        </>
    )
}
