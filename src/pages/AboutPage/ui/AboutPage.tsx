import React from 'react';

const AboutPage = () => {
    const date = new Date;
    const currentTime = `${date.getFullYear()}, ${date.getMonth()},  ${date.getDate()}`

    return (
        <div className={'time'}>
            AboutPage
            <div>{currentTime}</div>
        </div>
    );
};

export default AboutPage;