import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { profileActions } from 'pages/ProfilePage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../models/type/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    formData?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { className, data, formData, isLoading, error, readonly } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const onChangeFirst = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || undefined }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        if (currency) {
            dispatch(profileActions.updateProfile({ currency }));
        }
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    if (isLoading) return <Loader />;
    if (error) {
        return (
            <Text
                title={t('An error occurred while loading the profile')}
                text={t('Reload page')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {readonly
                ? (
                    <>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        {data?.avatar && <Avatar src={data?.avatar} alt="Avatar" size={150} />}
                        <div className={cls.row}>
                            <Text text={t('Your name')} theme={TextTheme.BLACK} />
                            <Text text={`: ${data?.first}`} theme={TextTheme.BLACK} />
                        </div>
                        <div className={cls.row}>
                            <Text text={t('Your lastname')} theme={TextTheme.BLACK} />
                            <Text text={`: ${data?.lastname}`} theme={TextTheme.BLACK} />
                        </div>
                        <div className={cls.row}>
                            <Text text={t('Age')} theme={TextTheme.BLACK} />
                            <Text text={`: ${data?.age}`} theme={TextTheme.BLACK} />
                        </div>
                        <div className={cls.row}>
                            <Text text={t('City')} theme={TextTheme.BLACK} />
                            <Text text={`: ${data?.city}`} theme={TextTheme.BLACK} />
                        </div>
                        <div className={cls.row}>
                            <Text text={t('User name')} theme={TextTheme.BLACK} />
                            <Text text={`: ${data?.username}`} theme={TextTheme.BLACK} />
                        </div>
                        <div className={cls.row}>
                            <Text text={t('Currency')} theme={TextTheme.BLACK} />
                            <Text text={`: ${data?.currency}`} theme={TextTheme.BLACK} />
                        </div>
                        <div className={cls.row}>
                            <Text text={t('Country')} theme={TextTheme.BLACK} />
                            <Text text={`: ${data?.country}`} theme={TextTheme.BLACK} />
                        </div>
                    </>
                )
                : (
                    <>
                        <Input
                            onChange={onChangeFirst}
                            type="text"
                            value={formData?.first}
                            className={cls.input}
                            placeholder={t('Your name')}
                        />
                        <Input
                            onChange={onChangeLastname}
                            type="text"
                            value={formData?.lastname}
                            className={cls.input}
                            placeholder={t('Your lastname')}
                        />
                        <Input
                            onChange={onChangeAge}
                            type="text"
                            value={formData?.age}
                            className={cls.input}
                            placeholder={t('Age')}
                        />
                        <Input
                            onChange={onChangeCity}
                            type="text"
                            value={formData?.city}
                            className={cls.input}
                            placeholder={t('City')}
                        />
                        <Input
                            onChange={onChangeUsername}
                            type="text"
                            value={formData?.username}
                            className={cls.input}
                            placeholder={t('Username')}
                        />
                        <Input
                            onChange={onChangeAvatar}
                            type="text"
                            value={formData?.avatar}
                            className={cls.input}
                            placeholder={t('Enter link to avatar')}
                        />
                        <CurrencySelect value={formData?.currency} onChange={onChangeCurrency} />
                        <CountrySelect value={formData?.country} onChange={onChangeCountry} />
                    </>
                )}
        </div>
    );
});
