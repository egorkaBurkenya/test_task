import React from 'react';
import styles from '../index.module.css';
import DeleteBtn from '../../../UIKit/DeleteBtn';

const Notification = ({title, text, onClick}) => {
    return (
        <div className={styles.notif}>
            <h5>{title}</h5>
            <p>{text}</p>
            <DeleteBtn onClick={onClick}>Read</DeleteBtn>
            <div className={styles.popup__line}/>
        </div>
    );
};

export default Notification;