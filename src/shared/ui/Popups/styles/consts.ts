import { DropdownDirection } from '../../../types/ui';

import cls from './Popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom-left': cls.bottomLeft,
    'bottom-right': cls.bottonRight,
    'top-left': cls.topLeft,
    'top-right': cls.topRight,
};
