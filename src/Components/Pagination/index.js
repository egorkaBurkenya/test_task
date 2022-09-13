import React from 'react';
import styles from './index.module.css';

const Pagination = ({ pageLen, allPL, setPage}) => {

    const numbers = [];
    for (let i = 1; i <= Math.ceil(allPL / pageLen); i++) {
        numbers.push(i)
    }

    return (
        <div>
            <ul className={styles.container}>
                {numbers.map(number => <li className={styles.li}>
                    <a href="!#" onClick={() => setPage(number)}>{number}</a>
                </li>)}
            </ul>
            
        </div>
    );
};

export default Pagination;