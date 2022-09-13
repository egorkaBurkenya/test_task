import React from 'react';
import styles from './index.module.css';

const Link = ({children, href}) => {
    return (
        <a className={styles.link} href={href}>
            {children}
        </a>
    );
};

export default Link;