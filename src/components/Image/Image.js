//src
import images from '~/assets/images';

//lib
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallback: PropTypes.string,
    className: PropTypes.string,
}

export default Image;
