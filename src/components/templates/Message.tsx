import { ReactNode } from "react";

type MessageAttributes = {
    show: boolean;
    message: string;
    succes: boolean;
}

export default function Message({ message, show, succes }: MessageAttributes):ReactNode {
    return (
        <div className={`fixed top-4  md:w-[25vw] border border-sky-700 bg-white rounded-md z-50 p-2 flex flex-col justify-between transition-all ease-in-out duration-300 ${show ? 'right-4 ' : '-right-[30vw]'}`}>
            <div className='flex w-[100%] gap-3 items-center'>
                <div className={`w-4 h-4 rounded-full ${succes ? 'bg-green-700' : 'bg-red-700'}`}></div>
                <h4 className='text-slate-700 font-montserrat font-semibold md:text-base text-xs mt-[1px]'>{message}</h4>
            </div>
        </div>
    )
}
