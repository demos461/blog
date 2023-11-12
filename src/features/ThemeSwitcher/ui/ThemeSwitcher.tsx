import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import TealIcon from '@/shared/assets/icons/theme-teal.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    let currentTheme;

    if (theme === Theme.LIGHT) currentTheme = <LightIcon />;
    if (theme === Theme.DARK) currentTheme = <DarkIcon />;
    if (theme === Theme.TEAL) currentTheme = <TealIcon />;

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {currentTheme}
        </Button>
    );
});
