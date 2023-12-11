import React, { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ className, src, alt = 'Avatar', size }) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    if (!src) {
        return (
            <img
                src="https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png"
                alt={alt}
                style={styles}
                className={classNames(cls.Avatar, {}, [className])}
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
