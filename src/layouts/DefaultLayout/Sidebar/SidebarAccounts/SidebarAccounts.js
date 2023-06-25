//src
import styles from './SidebarAccounts.module.scss';

//lib
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SidebarAccounts({ label, seeMoreBtn, preview }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem preview={preview}/>
            <AccountItem preview={preview}/>
            <AccountItem preview={preview}/>
            <p className={cx('see-all-btn')}>{seeMoreBtn}</p>
        </div>
    );
}

SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    seeMoreBtn: PropTypes.string.isRequired,
    preview: PropTypes.bool,
}

export default SidebarAccounts;
