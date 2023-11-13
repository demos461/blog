import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ArticleViewSwitcher.module.scss';
import { ArticleView } from '../../model/consts/consts';

interface ArticleViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onClick(ArticleView.SMALL)}
            >
                <GridIcon
                    className={classNames(cls.icon, {
                        [cls.selected]: view === ArticleView.SMALL,
                    })}
                />
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onClick(ArticleView.BIG)}
            >
                <ListIcon
                    className={classNames(cls.icon, {
                        [cls.selected]: view === ArticleView.BIG,
                    })}
                />
            </Button>
        </div>
    );
});
