import axios from 'axios';
import React, { useContext, useState } from 'react';
import CityCard from './CityCard';
import styles from './styles/Cities.module.css';
import earth from '../assets/earth.jpg';
import { ViewContext } from '../context/ViewContextProvider';
import useFadeUp from '../hooks/useFadeUp';
import { HelpContext } from '../context/HelpContextProvider';

const Cities = () => {
    const { API, KEY } = useContext(HelpContext);
    const { citiesRef } = useContext(ViewContext);
    const ref1 = useFadeUp();
    const ref2 = useFadeUp();
    const ref3 = useFadeUp();
    const [inputValue, setInputValue] = useState('');
    const [queue, setQueue] = useState(['Delhi', 'Chennai', 'Jaipur']);

    const handleSubmit = (e) => {
        e.target.value = '';
        axios
            .get(`${API}?q=${inputValue}&appid=${KEY}`)
            .then((res) => {
                queue.pop();
                const newqueue = [...queue];
                newqueue.unshift(inputValue);
                setQueue(newqueue);
            })
            .catch((err) => {
                alert('Incorrect spelling');
                console.log(err);
            });
    };

    return (
        <div className={styles.container} ref={citiesRef}>
            <h1>Search Weather</h1>
            <div ref={ref1}>
                <CityCard city={queue[0]} />
                <CityCard city={queue[1]} />
                <CityCard city={queue[2]} />
            </div>
            <div className={styles.searchbar} ref={ref2}>
                <input
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search city"
                    onKeyPress={(e) => {
                        if (e.key == 'Enter') {
                            handleSubmit(e);
                        }
                    }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/800px-Vector_search_icon.svg.png"
                    alt="search icon"
                />
            </div>
            <div className={styles.earth} ref={ref3}>
                <img src={earth} alt="earth" />
            </div>
        </div>
    );
};

export default Cities;
