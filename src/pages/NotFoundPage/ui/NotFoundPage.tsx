import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps{
    className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            {t('page not found')}
        </div>
    );
};
