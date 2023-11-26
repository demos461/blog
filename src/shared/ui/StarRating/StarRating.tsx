import { memo, useState } from 'react';

import { HStack } from '../Stack';

import cls from './StarRating.module.scss';

import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface StarRatingProps {
    className?: string;
    onSelect?: (startsCount: number) => void;
    size?: number;
    selectedStarts?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        size = 50,
        selectedStarts = 0,
    } = props;
    const [currentStartsCount, setCurrentStartsCount] = useState(selectedStarts);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStarts));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStartsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <HStack gap="8" className={classNames('', {}, [className])}>
            {stars.map((starNumber) => (
                <StarIcon
                    key={starNumber}
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStartsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStartsCount >= starNumber}
                />
            ))}
        </HStack>
    );
});
