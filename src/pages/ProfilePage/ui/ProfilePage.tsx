import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            4565
        </div>
    );
});

export default ProfilePage;
