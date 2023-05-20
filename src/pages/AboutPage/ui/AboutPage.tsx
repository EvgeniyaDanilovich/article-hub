import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const date = new Date();
    const currentTime = `${date.getFullYear()}, ${date.getMonth()},  ${date.getDate()}`;
    const { t, i18n } = useTranslation('about');

    return (
      <div className="time">
          {t('about page')}
          <div>{currentTime}</div>
        </div>
    );
};

export default AboutPage;
