import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form';

export default function useResetForm(method: UseFormReturn<any, any, undefined>, trigger: boolean, value: any) {
    useEffect(() => {
        if (value !== null) {
            method.reset(value)
        } else {
            method.reset()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, value])
}
