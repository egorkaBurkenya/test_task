import React from 'react';
import styles from './index.module.css';

const DeleteBtn = ({onClick, children}) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    );
};

export default DeleteBtn;