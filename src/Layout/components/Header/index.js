//Library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// src
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                <div className={cx('search')}>
                    <input type="text" name="input" placeholder="Search account and videos" spellCheck={false} />
                    <button type="button" className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                    <button type="button" className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
