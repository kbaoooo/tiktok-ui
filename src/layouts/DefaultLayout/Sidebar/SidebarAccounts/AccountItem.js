//src
import styles from './SidebarAccounts.module.scss';
import { PopperWrapper } from '~/components/Popper';

//lib
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PreviewAccount from './PreviewAccount/PreviewAccount';

const cx = classNames.bind(styles);

function AccountItem({ preview }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <PreviewAccount />
                </PopperWrapper>
            </div>
        );
    };

    return preview ? (
        <span>
            <HeadlessTippy render={renderPreview} offset={[-20, 0]} interactive delay={[800, 0]} placement="bottom">
                <div className={cx('item')}>
                    <img
                        className={cx('item-img')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/55b209725fa035053c06c87362f49f48~c5_100x100.jpeg?x-expires=1687719600&x-signature=AigmpWHPkz4v3IS3OnoQMceq%2Bjk%3D"
                        alt="zed"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Zed2607</strong>
                            <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Zed</p>
                    </div>
                </div>
            </HeadlessTippy>
        </span>
    ) : (
        <div className={cx('item')}>
            <img
                className={cx('item-img')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/55b209725fa035053c06c87362f49f48~c5_100x100.jpeg?x-expires=1687719600&x-signature=AigmpWHPkz4v3IS3OnoQMceq%2Bjk%3D"
                alt="zed"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Zed2607</strong>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Zed</p>
            </div>
        </div>
    );
}

export default AccountItem;
