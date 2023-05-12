import React from 'react';
import classes from './Counter.module.scss';

export const Counter: React.FC = () => {
    return (
        <div>
            <h1 className={classes.color}>Title</h1>
            <button>Took</button>
        </div>
    );
};
