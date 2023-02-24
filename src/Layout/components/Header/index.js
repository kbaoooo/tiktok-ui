//Library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

// src
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/Popper';
import AccountItem from '~/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [SearchResult, setSearchResult] = useState([]);

    useEffect(() => {});

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />

                <Tippy
                    interactive
                    visible={SearchResult.length > 0}
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-label')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
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
                </Tippy>

                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
