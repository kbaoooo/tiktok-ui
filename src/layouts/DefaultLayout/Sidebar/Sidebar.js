//library
import classNames from 'classnames/bind';

// src
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import { MenuItems } from './Menu';
import routesConfig from '~/config/routesConfig';
import { HomeIcon, LiveIcon, UserGroupIcon, HomeActiveIcon, LiveActiveIcon, UserGroupActiveIcon } from '~/assets/Icons';
import SidebarAccounts from './SidebarAccounts/SidebarAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    to={routesConfig.home}
                    title={'For You'}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItems
                    to={routesConfig.following}
                    title={'Following'}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItems to={routesConfig.live} title={'LIVE'} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SidebarAccounts label="Suggested Accounts"seeMoreBtn="See all"  preview />
            <SidebarAccounts label="Following Accounts" seeMoreBtn="See more" />
        </aside>
    );
}

export default Sidebar;
