import {
    HTMLAttributeAnchorTarget, HTMLAttributes, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import {
    ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article,
    ArticleTextBlock,

} from '../../model/types/article';
import { RoutePath } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <EyeIcon />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlocks = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <AppLink to={`${RoutePath.profile}${article.user.id}`} className={cls.user}>
                            {article.user.avatar && (
                                <Avatar
                                    size={30}
                                    src={article.user.avatar}
                                    alt={article.user.username}
                                />
                            )}
                            <Text text={article.user.username} />
                        </AppLink>
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img className={cls.img} src={article.img} alt={article.title} />
                    {textBlocks && (
                        <ArticleTextBlockComponent block={textBlocks} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePath.articles_details + article.id}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.articles_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imgWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.info}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} align={TextAlign.CENTER} className={cls.title} />
            </Card>
        </AppLink>
    );
});
