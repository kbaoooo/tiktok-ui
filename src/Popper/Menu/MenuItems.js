//library
import classNames from "classnames/bind";

// src
import Button from "~/Button";
import styles from'./Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({data}) {
    return (
        <Button className={cx('menu-items')} leftIcon={data.icon} to={data.to}>{data.title}</Button>
    );
}

export default MenuItems;