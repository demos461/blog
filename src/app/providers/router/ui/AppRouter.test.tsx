import { screen } from '@testing-library/react';

import AppRouter from './AppRouter';

import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

describe('app/router/AppRouter', () => {
    test('Page should be render', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        ComponentRender(<AppRouter />, {
            route: '/qwerty',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect no auth user to main page', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access auth user to private page', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _initiated: true,
                    authData: {
                        id: '1',
                    },
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('No access to private page (user role)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _initiated: true,
                    authData: {
                        id: '1',
                    },
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to private page (user role)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _initiated: true,
                    authData: {
                        id: '1',
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
