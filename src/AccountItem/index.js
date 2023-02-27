//library
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

//src
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9bea2c30cf41b2cb99db73e81b62b2b8~c5_100x100.jpeg?x-expires=1677351600&x-signature=Zen9mLRuwJ5KVTEX%2FxP1DXZLI%2BI%3D" alt="avatar"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Khanh Bao</span>  
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />  
                </h4>
                <span className={cx('username')}>
                    Khanh Bao 
                </span>
            </div>
        </div>
    );
}

export default AccountItem;