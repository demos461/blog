import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    return (
        <Popover
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <NotificationIcon className={cls.notificIcon} />
                </Button>
            )}
            className={classNames('', {}, [className])}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
