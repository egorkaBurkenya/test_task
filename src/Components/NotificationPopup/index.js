import React from 'react';
import styles from './index.module.css';
import Notification from './Notification';

const NotificationPopup = ({count, notifications, isOpen, onClick, deleteFunc}) => {
    return (
        <div className={isOpen ? styles.popup : styles.popup_none}>
            <div className={styles.popup__content}>
                <div className={styles.popup__title_block}>
                    <></>
                    <h2 className={styles.popup__title}>U have {count} notif.</h2>
                    <div className={styles.popup__close} onClick={onClick} />
                </div>
                <div className={styles.popup__notifications}>
                    {
                    notifications.map(
                        (
                            {text, title, id}) => 
                            <Notification 
                                key={id} 
                                title={title} 
                                text={text} 
                                onClick={() => deleteFunc(id)}/>
                            )
                    }
                    <p style={{fontSize:"18px"}}>That's all!</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationPopup;