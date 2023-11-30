import { ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';

import cls from './Popover.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const { className, direction = 'bottom-left', trigger, children } = props;

    const popoverClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(popupCls.popup, {}, [className])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, popoverClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
