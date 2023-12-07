import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = memo(() => {
    const date = new Date();
    // const currentTime = `${date.getFullYear()}, ${date.getMonth()},  ${date.getDate()}`;
    const { t } = useTranslation('about');

    return (
        <Page className="time">
            {t('about page')}
            123
            {/* <div>{currentTime}</div> */}
        </Page>
    );
});

export default AboutPage;
