import React, { ReactNode } from 'react'

type TableAttributes = {
    head: { title: string, type: string }[],
    children: React.ReactNode,
}

function Table({ head, children }: TableAttributes): ReactNode {
    return (
        <div className='overflow-y-auto h-[100%] scrollbar-hide'>
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-sm text-sky-800 uppercase border-t border-t-slate-200 bg-white sticky top-0">
                    <tr>
                        {head.map((d: { title: string, type: string }, id: number) => (
                            <th key={id} scope="col" className={`px-6 py-3 border-t ${d.type === 'number' ? "text-right" : ""}`}>{d.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table