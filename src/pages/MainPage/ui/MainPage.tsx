import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonFontFamily, ButtonFontSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginModal } from 'features/AuthByUserName';
import cls from './MainPage.module.scss';
import BgImg from '../../../shared/assets/images/bg-main.png';
import BgImgBlue from '../../../shared/assets/images/bg-main-blue.png';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const { theme, switchTheme } = useTheme();
    const isAuth = useSelector(selectUserAuthData);
    const navigate = useNavigate();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    const onRedirect = useCallback(() => {
        if (isAuth) {
            navigate(RoutePath.articles);
        } else {
            onToggleModal();
        }
    }, [isAuth, navigate, onToggleModal]);

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
                    onClick={onRedirect}
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
            {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onToggleModal} />}
        </Page>
    );
});

export default MainPage;
