import { ReactNode } from 'react';
import Select from 'react-select'

type SelectorAttributes = {
    instanceId: string;
    title: string;
    options: Array<{ value: string | number | null, label: string | number | null }>
    value: { value: string | number | null, label: string | number | null }
    setValue: (e: any) => void;
    defaultValue?: { value: string | number | null, label: string | number | null };
}


function Selector({ title, setValue, options, value, instanceId }: SelectorAttributes): ReactNode {
    return (
        <div className='w-full font-bahij font-light'>
            <h1 className="text-xs font-bahij text-right">{title}</h1>
            <Select
                instanceId={instanceId}
                styles={{
                    control: (baseStyles: any) => ({
                        ...baseStyles,
                        borderRadius: "6px",
                        paddingTop: "1px",
                        paddingBottom: "1px",
                    }),

                }}
                options={options}
                value={value}
                onChange={setValue}
                defaultValue={{ value: null, label: "Pilih Mustamiq" }}
            />
        </div>
    )
}

export default Selector