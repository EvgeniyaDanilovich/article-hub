import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('main page')}
            <Counter />
        </div>
    );
});

export default MainPage;
