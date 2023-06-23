import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import cls from './ProfilePage.module.scss';
import { selectProfileData } from '../models/selectors/selectProfileData/selectProfileData';
import { selectProfileIsLoading } from '../models/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { selectProfileError } from '../models/selectors/selectProfileError/selectProfileError';
import { fetchProfileData } from '../models/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../models/slice/profileSlice';
import { selectProfileReadonly } from '../models/selectors/selectProfileReadonly/selectProfileReadonly';
import { selectProfileForm } from '../models/selectors/selectProfileForm/selectProfileForm';

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const data = useSelector(selectProfileData);
    const formData = useSelector(selectProfileForm);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);
    const readonly = useSelector(selectProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard readonly={readonly} data={data} formData={formData} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
