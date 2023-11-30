import React, { memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

import { AppRoutesProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

const AppRouter = () => {
    const renderWithWrapper = useCallback(
        (route: AppRoutesProps) => (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{route.element}</RequireAuth>
                    ) : (
                        route.element
                    )
                }
            />
        ),
        [],
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
