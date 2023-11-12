import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInitiated, userActions } from '@/entities/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const initiated = useSelector(getUserInitiated);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initiated && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
