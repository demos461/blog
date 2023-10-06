import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => (
        <Route
            key={route.path}
            path={route.path}
            element={
                route.authOnly
                    ? <RequireAuth><div>{route.element}</div></RequireAuth>
                    : route.element
            }
        />
    ), []);

    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(renderWithWrapper)}
                </Routes>
            </div>
        </Suspense>
    );
};

export default memo(AppRouter);
