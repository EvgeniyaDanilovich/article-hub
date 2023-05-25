import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface PageErrorProps{
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({className}) => {
    const {t} =useTranslation();

    const onReload = () =>{
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {}, [])}>
           <p> {t('something went wrong')}</p>
            <Button onClick={onReload}>{t('reload page')}</Button>
        </div>
    );
};