import {
    HTMLAttributeAnchorTarget, memo,
} from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import {
    Article,
    ArticleTextBlock,

} from '../../model/types/article';
import {
    ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Loader } from '@/shared/ui/Loader';
import { Text, TextAlign } from '@/shared/ui/Text';

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
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])} data-testid="ArticleListItem">
                <Card>
                    <div className={cls.header}>
                        <AppLink to={getRouteProfile(article.user.id)} className={cls.user}>
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
                    <AppImage className={cls.img} src={article.img} alt={article.title} />
                    {textBlocks && (
                        <ArticleTextBlockComponent block={textBlocks} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={getRouteArticleDetails(article.id)}>
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
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imgWrapper}>
                    <AppImage fallback={<Loader />} className={cls.img} src={article.img} alt={article.title} />
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
