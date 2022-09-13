import React from 'react';
import styles from './index.module.css';

const NotIco = ({count}) => {
    return (
        <div className={count != 0 ? styles.ico : styles.ico_hover}>
            {count}
        </div>
    );
};

export default NotIco;