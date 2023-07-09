import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    // const isAuth = useSelector(selectUserAuthData);
    //
    // const routes = useMemo(() => {
    //     return Object.values(routeConfig).filter((route) => {
    //         if (route.authOnly && !isAuth) {
    //             return false;
    //         }
    //
    //         return true;
    //     });
    // }, [isAuth]);

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (<div className="page-wrapper">{route.element}</div>);

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
                {/* {routes.map((route) => ( */}
                {/*     <Route */}
                {/*         key={route.path} */}
                {/*         path={route.path} */}
                {/*         element={<div className="page-wrapper">{route.element}</div>} */}
                {/*     /> */}
                {/* ))} */}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
