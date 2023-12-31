import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

describe('Sidebar', () => {
    test('Render sidebar', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
