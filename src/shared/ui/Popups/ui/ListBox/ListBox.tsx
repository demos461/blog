import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { Button, ButtonTheme } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/Popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean
}

interface ListBoxProps {
    label?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    className?: string
    direction: DropdownDirection
}

export const ListBox = memo((props: ListBoxProps) => {
    const {
        label,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        className,
        direction = 'bottom-right',
    } = props;

    const listBoxClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label
                && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(popupCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly} theme={ButtonTheme.OUTLINE}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, listBoxClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [cls.selected]: selected,
                                    [cls.active]: active,
                                    [popupCls.disabled]: item.disabled,
                                })}
                                >
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
});
