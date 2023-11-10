import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? t('Редактирование статьи') : t('Создание новой статьи')}
        </Page>
    );
};

export default memo(ArticleEditPage);
