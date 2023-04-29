import React, { useContext } from 'react';
import styles from './styles/WeatherMain.module.css';
import useFadeUp from '../hooks/useFadeUp';
import { HelpContext } from '../context/HelpContextProvider';

const WeatherMain = ({ temp, city, id }) => {
    const ref = useFadeUp();
    const { date, dayOfWeek } = useContext(HelpContext);

    return (
        <div className={styles.container} ref={ref}>
            <h1>
                {temp} <sup>°</sup>
            </h1>
            <div>
                <h2>{city}</h2>
                <p>
                    {date.getHours()}:{date.getMinutes()}{' '}
                    {dayOfWeek[date.getDay()]} {date.getMonth() + 1}/
                    {date.getDate()}/{date.getFullYear()}
                </p>
            </div>
            <img
                src={process.env.REACT_APP_ICON_URL.replace('10d', id)}
                alt="icon"
            />
        </div>
    );
};

export default WeatherMain;
