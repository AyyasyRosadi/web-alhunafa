import { FormEventHandler, ReactNode } from 'react'

type FormAttributes = {
  children: ReactNode
  submit: (e: any) => void;
  titleButton?: string;
  noButton?: boolean;
}


export default function Form({ children, submit, noButton }: FormAttributes):ReactNode {
  return (
    <form className='flex flex-col gap-3' onSubmit={submit}>
      {children}
      <div className={`flex justify-end mt-4 gap-2 ${noButton ? "hidden" : "block"}`}>
        <button type='submit' className='flex gap-2 justify-center items-center bg-sky-600 hover:bg-sky-700 px-5 py-2 rounded-md transition-colors ease-in-out duration-300'>
          <h4 className='font-montserrat text-white font-semibold md:text-sm text-[0.750rem] md:block hidden'>Simpan</h4>
        </button>
      </div>
    </form>
  )
}
