import React from 'react';
import styles from './index.module.css';

const Table = ({products, loading}) => {
    if (loading) <h1>Loading... </h1>
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td className={styles.history__point}>id</td>
                        <td className={styles.history__point}>title</td>
                        <td className={styles.history__point}>description</td>
                        <td className={styles.history__point}>price</td>
                        <td className={styles.history__point}>discountPercentage</td>
                        <td className={styles.history__point}>rating</td>
                        <td className={styles.history__point}>stock</td>
                    </tr>
                    {products.map((
                        {
                            id, 
                            title, 
                            description, 
                            price, 
                            rating, 
                            brand, 
                            category, 
                        }) =>   <tr className={styles.point} key={id}>
                                    <td>{id}.</td>
                                    <td>{title}</td>
                                    <td className={styles.description}>{description}</td>
                                    <td>${price}</td>
                                    <td>{brand}</td>
                                    <td>{rating}⭐</td>
                                    <td>{category}</td>
                                </tr>)}
                
                </thead>
            </table>
        </div>
    );
};

export default Table;