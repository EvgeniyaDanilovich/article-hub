import React from 'react';
import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from '*.scss';

interface LoaderProps{
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
    <div className={classNames('lds-ellipsis', {}, [])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
