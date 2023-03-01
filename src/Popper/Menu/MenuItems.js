//library
import classNames from "classnames/bind";

// src
import Button from "~/Button";
import styles from'./Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({data, onClick}) {
    return (
        <Button className={cx('menu-items')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {(data.code) ? (`${data.title} (${data.code})`) : data.title}
        </Button>
    );
}

export default MenuItems;