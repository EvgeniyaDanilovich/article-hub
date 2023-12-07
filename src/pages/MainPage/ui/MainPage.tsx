import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Page } from 'shared/ui/Page/Page';
import cls from './MainPage.module.scss';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [min, setMin] = useState(7);
    const [sec, setSec] = useState(60);
    // let sec = 60;

    // useEffect(() => {
    //
    // }, [min, sec]);

    setInterval(() => {
        // if (sec === 0) {
        //     // setSec(60);
        //     // sec = 60;
        //     // setMin(min - 1);
        // } else {
        //     console.log(sec);
        //     // setSec(sec - 1);
        // }
        // setSec(sec - 1);
    }, 1000);

    return (
        <Page>
            <BugButton />
            {t('main page')}
            <Counter />
            <div className={cls.timer}>
                <div className={cls.min}>{min}</div>
                <div>:</div>
                <div className={cls.sec}>{sec}</div>
            </div>
        </Page>
    );
});

export default MainPage;
