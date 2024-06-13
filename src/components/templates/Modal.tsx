import { MouseEventHandler, ReactNode } from 'react'
import { GrClose } from "react-icons/gr";

type ModalAttributes = {
    show: boolean;
    title: string;
    close: MouseEventHandler<HTMLDivElement>
    children: ReactNode;
    scroll?: boolean;
    icon?: ReactNode;
}

export default function Modal({ show, title, children, close, scroll }: ModalAttributes): ReactNode {
    return (
        <div className={`fixed z-50 top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-50 flex flex-col justify-center items-center ${show ? 'visible' : 'invisible'}`}>
            <div className={`xl:w-[40vw] w-[95vw] bg-white h-[90%] transition-all ease-in-out duration-500 ${show ? 'scale-100' : 'scale-0'}`}>
                <div className='border-b border-slate-300 h-[7%] p-3 sticky top-0 bg-white z-10 text-right'>
                    <h4 className='font-bahij'>{title}</h4>
                </div>
                <div className={`h-[83%] p-4 ${scroll ? 'overflow-y-auto scrollbar-hide ' : ''}`}>
                    {children}
                </div>
                <div className={`fixed bottom-0 w-[100%] border-t border-t-base bg-white flex justify-end gap-3 py-2 px-4`}>
                    <div onClick={close} className='cursor-pointer bg-red-700 text-white px-10 py-1 rounded-md'>مغلق</div>
                </div>
            </div>
        </div>
    )
}
