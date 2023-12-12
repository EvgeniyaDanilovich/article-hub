import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonFontFamily, ButtonFontSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './MainPage.module.scss';
import BgImg from '../../../shared/assets/images/bg-main.png';
import BgImgBlue from '../../../shared/assets/images/bg-main-blue.png';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const { theme, switchTheme } = useTheme();

    return (
        <Page className={cls.MainPage}>
            <div className={cls.firstBlock}>
                <Text
                    title={t('Explore, dream, discover')}
                    size={TextSize.eight}
                    className={cls.title}
                    weight={TextWeight.BOLD}
                />
                <Text
                    size={TextSize.five}
                    text={t('Embark on a journey of endless curiosity and self-discovery')}
                    className={cls.text}
                />
                <Button
                    fontSize={ButtonFontSize.two}
                    fontFamily={ButtonFontFamily.TITLE}
                    theme={ButtonTheme.BACKGROUND}
                    className={cls.btn}
                >
                    {t('Start reading')}
                </Button>
                {theme === Theme.ORANGE
                    ? <img src={BgImg} alt={t('background')} className={cls.bgImg} />
                    : <img src={BgImgBlue} alt={t('background')} className={cls.bgImg} />}

            </div>
        </Page>
    );
});

export default MainPage;
