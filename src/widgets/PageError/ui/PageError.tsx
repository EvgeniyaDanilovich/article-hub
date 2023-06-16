import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p>
                {' '}
                {t('something went wrong')}
            </p>
            <Button onClick={onReload}>{t('reload page')}</Button>
        </div>
    );
});
