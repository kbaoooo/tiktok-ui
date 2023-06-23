//Layouts
import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

import config from '~/config';

const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: Home,
    },
    {
        path: config.routesConfig.following,
        component: Following,
    },
    {
        path: config.routesConfig.nickname,
        component: Profile,
    },
    {
        path: config.routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routesConfig.live,
        component: Live,
    },
    {
        path: config.routesConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
