import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('button', () => {
    test('render Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('render Button with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
