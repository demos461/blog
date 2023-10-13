import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {article.title}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imgWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.info}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <EyeIcon />
                </div>
                <Text text={article.title} align={TextAlign.CENTER} className={cls.title} />
            </Card>
        </div>
    );
});
