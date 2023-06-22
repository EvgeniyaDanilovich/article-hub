import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { selectProfileData } from '../../models/selectors/selectProfileData/selectProfileData';
import { selectProfileIsLoading } from '../../models/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { selectProfileError } from '../../models/selectors/selectProfileError/selectProfileError';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const data = useSelector(selectProfileData);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div className={cls.profileData}>
                <Input type="text" value={data?.first} className={cls.input} placeholder={t('Your name')} />
                <Input type="text" value={data?.lastname} className={cls.input} placeholder={t('Your lastname')} />
            </div>
        </div>
    );
};
