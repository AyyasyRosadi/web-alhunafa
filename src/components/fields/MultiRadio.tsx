import React, { ReactNode } from 'react'
import RadioForm from './RadioForm'
import { FieldValues, UseFormReturn } from 'react-hook-form';

type MultiRadioAttributes = {
    header: string
    method: UseFormReturn<any, any>;
    methodName: string;
    value: Array<string | number>;
    title: Array<string>;
    children?: ReactNode;
}


export default function MultiRadio({ header, method, methodName, value, title, children }: MultiRadioAttributes): ReactNode {
    const errorMessage = method.formState.errors[methodName]?.message
    return (
        <div>
            <h1 className='font-semibold mb-2 font-montserrat text-gray-700'>{header}</h1>
            <div className='flex my-auto md:space-x-0 space-x-2'>
                <RadioForm method={method} methodName={methodName} val={value[0]} title={title[0]} />
                <RadioForm method={method} methodName={methodName} val={value[1]} title={title[1]} />
                {children}
            </div>
            {method.formState.errors[methodName] && (
                <p className="text-red-600 mt-1 mx-1">
                    {`${errorMessage}`}
                </p>
            )}
        </div>
    )
}
