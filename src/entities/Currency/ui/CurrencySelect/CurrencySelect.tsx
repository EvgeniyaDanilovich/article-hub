import React, { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    value?: Currency;
    onChange: (value: Currency) => void;
}

const options = [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({ value = Currency.BYN, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            options={options}
            value={value}
            // label={t('Currency')}
            onChange={onChangeHandler}
            className={cls.select}
        />
    );
});
