import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder
                && (
                    <span className={cls.placeholder}>
                        {`${placeholder}>`}
                    </span>
                )}
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
