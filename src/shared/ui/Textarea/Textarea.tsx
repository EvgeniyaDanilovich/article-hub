import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

interface TextareaProps {
    className?: string;
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

// eslint-disable-next-line no-redeclare
interface TextareaProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
}

export const Textarea = memo((props: TextareaProps) => {
    const { className, value, onChange, ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <textarea
            value={value}
            onChange={onChangeHandler}
            className={cls.textarea}
            {...otherProps}
        />
    );
});
