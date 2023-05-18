import React from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className={'content-page'}>
                <Sidebar />
                <AppRouter />
            </div>

            {/* <button onClick={switchTheme}>Theme</button> */}
        </div>
    );
};

export default App;