import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader/Loader';

interface ArticleRatingProps {
    className?: string;
    articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback((startsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: startsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onCancelHandler = useCallback((startsCount: number) => {
        handleRateArticle(startsCount);
    }, [handleRateArticle]);

    const onAcceptHandler = useCallback((startsCount: number, feedback?: string) => {
        handleRateArticle(startsCount, feedback);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <HStack justify="center" max>
                <Loader />
            </HStack>
        );
    }

    return (
        <RatingCard
            onAccept={onAcceptHandler}
            onCancel={onCancelHandler}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье')}
            hasFeedback
            rate={rating?.rate}
            className={className}
        />
    );
});

export default ArticleRating;
