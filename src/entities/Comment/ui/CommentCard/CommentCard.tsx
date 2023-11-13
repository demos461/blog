import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { RoutePath } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <HStack justify="center" max>
                <Loader />
            </HStack>
        );
    }

    return (
        <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
                <HStack gap="8">
                    {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} /> }
                    <Text text={comment.user.username} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
