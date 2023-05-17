import React from 'react';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

const App = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames('app', {  }, [theme])}>
            <button onClick={switchTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
           <AppRouter />
        </div>
    );
};

export default App;