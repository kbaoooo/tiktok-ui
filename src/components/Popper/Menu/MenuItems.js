//library
import classNames from 'classnames/bind';

// src
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.code ? `${data.title} (${data.code})` : data.title}
        </Button>
    );
}

export default MenuItems;
