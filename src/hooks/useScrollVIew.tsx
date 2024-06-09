import { useEffect, useState } from 'react'

export default function useScrollVIew(position: number) {
    const [showView, setShowView] = useState<boolean>(false)
    useEffect(() => {
        const move = () => {
            if (window.scrollY > position) {
                setShowView(true)
            }
            else {
                setShowView(false)
            }
        }
        window.addEventListener("scroll", move)
        return () => window.addEventListener("scroll", move)
    }, [position])
    return showView
}
