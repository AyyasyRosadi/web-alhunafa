import React, { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from 'react'

export default function TextField({ id, type, title, value, setValue, placeholder, read, width, right, children }: { id: string, type?: 'text' | 'number' | 'file', title: string, value: string, setValue: ChangeEventHandler<HTMLInputElement>, placeholder?: string, read?: boolean, width?: string, right?: boolean, children?: ReactNode }) {
    return (
        <div className={`flex flex-col gap-1 relative ${width ? width : ''}`}>
            <label className={`text-xs font-bahij ${right ? 'text-right' : ''}`} htmlFor={id}>{title}</label>
            <input id={id} name="input" type={type ? type : 'text'} value={value} onChange={setValue} className={`px-2 py-1 rounded-md outline-none border border-slate-300 font-montserrat text-sm font-bahij ${right ? 'text-right' : ''}`} placeholder={placeholder} disabled={read} />
            {children}
        </div>
    )
}
