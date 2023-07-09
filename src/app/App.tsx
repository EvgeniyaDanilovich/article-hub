import React, { Suspense, useEffect } from 'react';
// import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInitiated, userActions } from 'entities/User';

const App = () => {
    const dispatch = useDispatch();
    const { theme } = useTheme();
    const initiated = useSelector(selectUserInitiated);

    useEffect(() => {
        dispatch(userActions.initAuthData());
        document.body.className = theme || 'app_light_theme';
    }, [dispatch, theme]);

    return (
        <div className={classNames('app', {}, [])}>
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
