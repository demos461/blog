import React, { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const { isClosing, close } = useModal({
        animationDelay: 200,
        onClose,
        isOpen,
    });
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
};
