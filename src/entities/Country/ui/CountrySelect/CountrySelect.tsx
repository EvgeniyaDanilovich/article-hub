import React, { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country/model/types/country';

interface CountrySelectProps {
    value?: Country;
    onChange: (value: Country) => void;
}

const options = [
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.UKRAINE, content: Country.UKRAINE },
    { value: Country.RUSSIA, content: Country.RUSSIA },
];

export const CountrySelect = memo(({ value, onChange }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            options={options}
            value={value}
            label={t('Country')}
            onChange={onChangeHandler}
        />
    );
});
