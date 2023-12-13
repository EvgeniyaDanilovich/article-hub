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

// comment

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
            <Avatar src={data?.avatar} alt={t('Avatar')} size={150} className={cls.avatar} />

            <div className={cls.fieldsArea}>
                <div className={cls.row}>
                    <Text text={`${t('Your name')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                    {readonly
                        ? <Text text={`${data?.first}`} />
                        : (
                            <Input
                                onChange={onChangeFirst}
                                type="text"
                                value={formData?.first}
                                className={cls.input}
                                placeholder={t('Your name')}
                            />
                        )}
                </div>
                <div className={cls.row}>
                    <Text text={`${t('Your lastname')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                    {readonly
                        ? <Text text={`${data?.lastname}`} />
                        : (
                            <Input
                                onChange={onChangeLastname}
                                type="text"
                                value={formData?.lastname}
                                className={cls.input}
                                placeholder={t('Your lastname')}
                            />
                        )}
                </div>
                <div className={cls.row}>
                    <Text text={`${t('User name')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                    {readonly
                        ? <Text text={`${data?.username}`} />
                        : (
                            <Input
                                onChange={onChangeUsername}
                                type="text"
                                value={formData?.username}
                                className={cls.input}
                                placeholder={t('Username')}
                            />
                        )}
                </div>
                <div className={cls.row}>
                    <Text text={`${t('Age')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                    {readonly
                        ? <Text text={`${data?.age}`} />
                        : (
                            <Input
                                onChange={onChangeAge}
                                type="text"
                                value={formData?.age}
                                className={cls.input}
                                placeholder={t('Age')}
                            />
                        )}
                </div>
                <div className={cls.row}>
                    <Text text={`${t('Country')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                    {readonly
                        ? <Text text={`${data?.country}`} />
                        : <CountrySelect value={formData?.country} onChange={onChangeCountry} />}
                </div>
                <div className={cls.row}>
                    <Text text={`${t('City')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                    {readonly
                        ? <Text text={`${data?.city}`} />
                        : (
                            <Input
                                onChange={onChangeCity}
                                type="text"
                                value={formData?.city}
                                className={cls.input}
                                placeholder={t('City')}
                            />
                        )}
                </div>
                <div className={cls.row}>
                    <Text text={`${t('Currency')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                    {readonly
                        ? <Text text={`${data?.currency}`} />
                        : <CurrencySelect value={formData?.currency} onChange={onChangeCurrency} />}
                </div>
                {!readonly
                    && (
                        <div className={cls.row}>
                            <Text text={`${t('Avatar')}:`} theme={TextTheme.SECONDARY} className={cls.fieldName} />
                            <Input
                                onChange={onChangeAvatar}
                                type="text"
                                value={formData?.avatar}
                                className={cls.input}
                                placeholder={t('Avatar')}
                            />
                        </div>
                    )}
            </div>
        </div>
    );
});
