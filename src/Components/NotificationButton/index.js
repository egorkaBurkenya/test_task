import React from 'react';
import NotIco from '../../UIKit/NotIco';
import styles from './index.module.css';

const NotificationButton = ({onClick, notificationsLenght}) => {

    return (
        <div className={styles.btn} onClick={onClick}> 
            <p>Notifications</p>
            <NotIco count={notificationsLenght} />
        </div>
    );
};

export default NotificationButton;