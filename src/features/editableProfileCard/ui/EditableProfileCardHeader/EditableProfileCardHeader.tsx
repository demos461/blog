import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    getProfileReadonly,
} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
    getProfileData,
} from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import {
    updateProfileData,
} from '../../model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <HStack gap="8">
                    { readonly
                        ? (
                            <Button onClick={onEdit}>
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button onClick={onSave}>
                                    {t('Сохранить')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE} onClick={onCancelEdit}>
                                    {t('Отменить')}
                                </Button>
                            </>
                        )}
                </HStack>
            )}
        </HStack>
    );
});
