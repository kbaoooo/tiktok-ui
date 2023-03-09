// library
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/Popper';
import MenuItems from './MenuItems';
import { useState } from 'react';

//src
import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction }) {
    const [history, setHistoy] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistoy((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            offset={[25, 5]}
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title="Languages"
                                    onBack={() => {
                                        setHistoy((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                );
            }}
            onHide={() => {
                setHistoy(prev => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
