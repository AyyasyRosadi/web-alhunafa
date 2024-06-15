'use client'
import Image from "next/image";
import Logo from "@/assets/images/logo.png"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import InputForm from "@/components/fields/TextForm";
import { UseLogin } from "@/hooks/query/useLogin";
import { ReactNode, useState } from "react";
import UseCheckHasLogin from "@/hooks/useCheckHasLogin";
import Loading from "@/components/templates/Loading";

export default function Login(): ReactNode {
    const [showLoading, setShowLoading] = useState(false)
    const [message, setMessage] = useState<string | null | undefined>()
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                email: yup.string().required('username cannot empty'),
                password: yup.string().min(1, 'password at least have 8 character').required('password cannot empty'),
            })
        )
    })
    const submit_ = async (e: { email: string, password: string }) => {
        setShowLoading(true)
        const isLogin = await UseLogin(e)
        if (isLogin?.status === 200 && isLogin?.url) {
            setMessage('')
            window.location.href = '/admin/home/project'
        } else {
            setMessage('Username / Password Salah')
        }
        setShowLoading(false)
    }
    UseCheckHasLogin()
    return (
        <>
            <Loading show={showLoading} />
            <div className="flex justify-center items-center h-screen">
                <div className="md:w-[30vw] w-[95vw] rounded-xl shadow-xl border">
                    <div className="p-4 flex items-center justify-end gap-2 w-[100%]">
                        <h1 className="font-semibold font-bahij text-base text-lg">الحنفأ</h1>
                        <Image loading="eager" placeholder="blur" src={Logo} alt="" className="w-14 h-14 bg-white rounded-full p-1" />
                    </div>
                    <form className="p-4 flex flex-col gap-3" onSubmit={method.handleSubmit(submit_)}>
                        <InputForm right id="input-email" title="بريد إلكتروني" method={method} methodName="email" whiteText />
                        <InputForm right id="input-password" type="password" title="كلمة المرور" method={method} methodName="password" whiteText />
                        <h1 className="font-montserrat text-white text-left">{message}</h1>
                        <button type="submit" className="bg-base px-5 py-2 mt-4 w-[100%] font-bahij text-white rounded-md cursor-pointer outline-none text-center">تسجيل الدخول</button>
                    </form>
                </div>
            </div >
        </>
    );
}
