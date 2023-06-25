//src
import styles from './PreviewAccount.module.scss';

//lib
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PreviewAccount(props) {
    return (
        <div className={cx('wrapper')} tabIndex="-1" {...props}>
            <header className={cx('header')}>
                <img
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/55b209725fa035053c06c87362f49f48~c5_100x100.jpeg?x-expires=1687719600&x-signature=AigmpWHPkz4v3IS3OnoQMceq%2Bjk%3D"
                    alt=""
                    className={cx('avatar')}
                />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Zed2607</strong>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Zed</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default PreviewAccount;
