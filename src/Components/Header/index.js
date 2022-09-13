import React, {useState, useEffect} from 'react';
import styles from './index.module.css';
import Link from '../../UIKit/Link';
import NotificationButton from '../NotificationButton';
import NotificationPopup from '../NotificationPopup';


const Header = () => {
    const [notifications, _setNotifications] = useState([
        {
            title: "New message from Mario", 
            text: "There is a controversial point of view, which reads something \
            like the following: actively developing third world countries are \
            gaining popularity among certain segments of the population, which means \
            they should be equally left to themselves.", id: 1
        },
        {title: "New message from Luigi", text: "Hi, man!", id: 2},
      ])
    const setNotifications = (id) => {
        _setNotifications(notifications.filter((i) => {return i.id != id}))
    }

    const [isPopupActive, setIsPopupActive] = useState(false);

    const newNotifications = [
        {
            title: 'Message from Ninja', 
            text: 'Veniam voluptate exercitation exercitation do pariatur exercitation aliqua laborum.',  
            id: 11
        },
        {
            title: 'Message from Ninja', 
            text: 'Dolor voluptate exercitation amet aliquip sunt consectetur commodo ea duis eiusmod in cupidatat consequat dolor.',  
            id: 12
        },
        {
            title: 'Message from Ninja', 
            text: 'Consectetur nulla sint elit culpa culpa velit cupidatat Lorem aliqua enim tempor anim.',  
            id: 13
        },
        {
            title: 'Message from Ninja', 
            text: 'Est consectetur non ullamco dolor commodo exercitation.',  
            id: 14
        },
        {
            title: 'Message from Ninja', 
            text: 'Do labore ea magna qui non ex culpa proident nostrud fugiat fugiat sit qui dolore.',  
            id: 15
        },
    ]

    const delay = i => {
        setTimeout(() => {        
            _setNotifications((prev) => [...prev, newNotifications[i]])
        }, i+1 * 2000)
    }

    useEffect(() => {
        for (let i in newNotifications) {
            delay(i)
        }
    }, [])

    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>🪐 TestTask</h2>
            <div className={styles.header__buttons}>
                <Link className={styles.header__btn} href="https://github.com/egorkaBurkenya">GitHub</Link>
                <Link className={styles.header__btn} href="https://t.me/quietjourney">Telegram</Link>
                <Link className={styles.header__btn} href="https://space-world.notion.site/CV-c8d7ab37dae741e8934a823fa2ca10d2">CV</Link>
            </div>
            <NotificationButton 
                notificationsLenght={notifications.length} 
                onClick={() => setIsPopupActive(!isPopupActive)} />
            <NotificationPopup 
                onClick={() => setIsPopupActive(!isPopupActive)} 
                notifications={notifications} 
                count={notifications.length} 
                isOpen={isPopupActive} 
                deleteFunc={setNotifications}
                />
        </header>
    );
};

export default Header;