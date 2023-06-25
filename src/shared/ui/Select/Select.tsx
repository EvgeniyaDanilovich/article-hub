import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string,
    content: string,
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select = memo(({ className, options, label, value, onChange }: SelectProps) => {
    // const optionsList = memo<SelectOption[]>(() => {
    //     options?.map(opt => {
    //         return <option value={opt.value} key={opt.value}>{opt.content}</option>;
    //     });
    // };
    const f = [];

    return (
        <div>
            {label && <span className={cls.label}>{`${label} :`}</span>}
            <select className={classNames(cls.select, {}, [className])}>
                {/* {optionsList} */}
            </select>
        </div>
    );
});
