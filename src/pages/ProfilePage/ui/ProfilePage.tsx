import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ProfilePage.module.scss';
import { selectProfileData } from '../models/selectors/selectProfileData/selectProfileData';
import { selectProfileIsLoading } from '../models/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { selectProfileError } from '../models/selectors/selectProfileError/selectProfileError';
import { fetchProfileData } from '../models/services/fetchProfileData/fetchProfileData';
import { profileReducer } from '../models/slice/profileSlice';
import { selectProfileReadonly } from '../models/selectors/selectProfileReadonly/selectProfileReadonly';
import { selectProfileForm } from '../models/selectors/selectProfileForm/selectProfileForm';
import { selectProfileValidateErrors } from '../models/selectors/selectProfileValidateError/selectProfileValidateError';
import { ValidateProfileErrors } from '../models/types/profile';

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    const data = useSelector(selectProfileData);
    const formData = useSelector(selectProfileForm);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);
    const readonly = useSelector(selectProfileReadonly);
    const validateErrors = useSelector(selectProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Server error'),
        [ValidateProfileErrors.NO_DATA]: t('No data'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((error: ValidateProfileErrors) => (
                    <Text key={error} theme={TextTheme.ERROR} text={validateErrorTranslates[error]} />
                ))}
                <ProfileCard readonly={readonly} data={data} formData={formData} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
