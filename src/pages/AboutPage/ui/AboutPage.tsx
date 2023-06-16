import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
    const date = new Date();
    // const currentTime = `${date.getFullYear()}, ${date.getMonth()},  ${date.getDate()}`;
    const { t } = useTranslation('about');

    return (
        <div className="time">
            {t('about page')}
            123
            {/* <div>{currentTime}</div> */}
        </div>
    );
});

export default AboutPage;
