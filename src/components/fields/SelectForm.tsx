'use client'
import { Controller, UseFormReturn } from "react-hook-form"
import Select from 'react-select';
import { FocusEventHandler, ReactNode } from "react";

type SelectFormAttributes = {
    instanceId: string;
    method: UseFormReturn<any, any, undefined>;
    methodName: string;
    className?: string;
    title: string;
    defaultValue?: { value: string | number | boolean | undefined; label: string | number | boolean | undefined };
    placeholder?: string;
    options: { value: string | number, label: string | number }[]
    isMulti?: boolean;
    blur?: FocusEventHandler<HTMLInputElement> | undefined;
    change?: (e: any) => void;
    disabled?: boolean;
    val?: { value: string | number | boolean | undefined; label: string | number | boolean | undefined }
}

function SelectForm
    ({ method, methodName, options, title, val, className, defaultValue, disabled, isMulti, blur, change, placeholder, instanceId }: SelectFormAttributes): ReactNode {
    const { error } = method.getFieldState(methodName)
    return (
        <div className={`w-full space-y-1 ${className}`}>
            <h1 className="text-xs font-bahij text-right font-semibold text-gray-700">{title}</h1>
            <Controller
                control={method.control}
                name={methodName}
                defaultValue={defaultValue}
                render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                }) => {
                    return <Select
                        instanceId={instanceId}
                        className={className}
                        styles={{
                            control: (baseStyles, state: any) => ({
                                ...baseStyles,
                                borderRadius: "0px",
                                paddingTop: "1px",
                                paddingBottom: "1px",
                                borderWidth: "2px",
                            }),
                        }}
                        classNamePrefix="select"
                        placeholder={placeholder}
                        options={options}
                        isMulti={isMulti}
                        onBlur={blur}
                        onChange={(e: any) => {
                            if (isMulti) {
                                onChange(e.map((d: any) =>
                                    d.value))
                                if (onChange) {
                                    onChange(e);
                                }
                            }
                            else {
                                onChange(e.value);
                                if (change) {
                                    change(e.value)
                                }
                            }
                        }}
                        isDisabled={disabled}
                        ref={ref}
                        value={change ? val : options?.find((o: any) => o.value === value) || {}}
                    />
                }}
            />
            {error && <p className='text-red-600 mt-1 mx-1'>{error.message as string}</p>}
        </div>
    );
}

export default SelectForm
