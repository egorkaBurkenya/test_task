import React from 'react';
import styles from './index.module.css';

const SerchFillterComponent = (
    {value, onChange, serchParametr, setSerchParametr, setSortType, sortType}
    ) => {
    return (
        <div>
            <input 
                className={styles.serch} 
                type="text" 
                placeholder={`serch by ${serchParametr}`} 
                value={value} 
                onChange={(e) => onChange(e.target.value)} /> 
            <div className={styles.settings}>
                <div className={styles.serchParametrs}>
                    <h4>Serch by:</h4>
                    <div>
                        <button onClick={() => {setSerchParametr("title")}}>...title</button>
                        <button onClick={() => {setSerchParametr("description")}}>
                            ...desription
                        </button>
                    </div>
                </div>
                <h3>{sortType}</h3>
                <div className={styles.sort}>
                    <div className={styles.column}>
                        <h4>Sort by price $</h4>
                        <div>
                            <button onClick={() => setSortType("price in ascending order")}>
                                price in ascending order ⬇️
                            </button>
                            <button onClick={() => setSortType("price in descending order")}>
                                price in descending order ⬆️
                            </button>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h4>Sort by rating ⭐</h4>
                        <div>
                            <button onClick={() => setSortType("rating in ascending order")}>
                                rating in ascending order ⬇️
                            </button>
                            <button onClick={() => setSortType("rating in descending order")}>
                                rating in descending order ⬆️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SerchFillterComponent;