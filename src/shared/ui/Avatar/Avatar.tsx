import { CSSProperties, useMemo } from 'react';

import { AppImage } from '../AppImage';

import cls from './Avatar.module.scss';

import UserIcon from '@/shared/assets/icons/user.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number
    alt?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const errorFallback = <UserIcon width={size} height={size} className={cls.icon} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
