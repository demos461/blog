import cls from './Popup.module.scss';
import { DropdownDirection } from '../../../types/ui';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom-left': cls.bottomLeft,
    'bottom-right': cls.bottonRight,
    'top-left': cls.topLeft,
    'top-right': cls.topRight,
};
