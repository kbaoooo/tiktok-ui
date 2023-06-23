//src
import styles from './Menu.module.scss';

//lib
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return <nav>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
