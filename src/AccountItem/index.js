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
            <img className={cx('avatar')} src="https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.34.png" alt="avatar"/>
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