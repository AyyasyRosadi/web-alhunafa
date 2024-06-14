 /* eslint-disable */
 import React, { ChangeEventHandler, Dispatch, InputHTMLAttributes, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { HiTrash } from "react-icons/hi";

type UploadFileAttributes = {
  title: string
  accept?: string
  preview?: string
  type?: string
  setValue: ChangeEventHandler<HTMLInputElement>
  value: string
  placeholder?: string
  icon?: ReactNode
  remove:()=>void;
}

function UploadFile({ title, preview, type, setValue, value, placeholder, remove }: UploadFileAttributes) {
  const inputRef = useRef<any>();
  const pick = () => {
    inputRef.current.click();
  };
  const [previewFile, setPreviewFile] = useState('');
  // useEffect(() => {
  //   preview && setPreviewFile(preview);
  // }, [preview]);
  return (
    <div className="w-[100%] bg-green-300 relative">
      <div
        onClick={pick}
        className="relative transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      >
        {preview ? (
          <img className="mx-auto w-[100%] h-[100%]" src={preview} alt="" />
          // eslint-disable-next-line 
        ) : (
          <div className="flex items-center space-x-2 h-[15rem] w-full hover:bg-slate-200 transition-colors ease-in-out duration-300">
            <div className="flex md:flex-row flex-col space-x-2 w-full justify-center">
              <h1 className="text-xl text-center">{title}</h1>
              <h1 className="text-xl font-thin">{type}</h1>
            </div>
          </div>
        )}
        <input ref={inputRef} name="input" type='file' value={value} onChange={setValue} className={`hidden`} placeholder={placeholder} />
      </div>
        <div className="absolute bottom-2 right-2">
          <HiTrash className={`w-7 h-7 cursor-pointer ${value ? 'text-white':'text-base'}`} onClick={remove}/>
        </div>
    </div>
  );
}

export default UploadFile;
