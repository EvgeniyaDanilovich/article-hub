import React, { ChangeEvent, memo, useMemo } from 'react';
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

export const Select = memo((props: SelectProps) => {
    const { className, options, label, value, onChange } = props;

    const optionsList = useMemo(() => {
        return options?.map((opt) => {
            return <option value={opt.value} key={opt.value}>{opt.content}</option>;
        });
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.selectWrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label} :`}</span>}
            <select value={value} onChange={onChangeHandler} className={cls.select}>
                {optionsList}
            </select>
        </div>
    );
});
