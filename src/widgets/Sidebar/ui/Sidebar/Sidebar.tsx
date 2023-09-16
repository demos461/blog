import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) =>
// const [collapsed, setCollapsed] = useState(false);

// const onToggle = () => {
//     setCollapsed((prev) => !prev);
// };

    // eslint-disable-next-line implicit-arrow-linebreak
    (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {}, [className])}
        >
            {/* <Button */}
            {/*    data-testid="sidebar-toggle" */}
            {/*    type="button" */}
            {/*    onClick={onToggle} */}
            {/* > */}
            {/*    toggle */}
            {/* </Button> */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
