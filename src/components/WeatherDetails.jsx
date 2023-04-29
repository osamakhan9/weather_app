import React from 'react';
import styles from './styles/WeatherDetails.module.css';
import useFadeUp from '../hooks/useFadeUp';

const WeatherDetails = ({ cloudy, humidity, wind }) => {
    const ref = useFadeUp();

    return (
        <div className={styles.container} ref={ref}>
            <h2>Weather Details</h2>
            <div>
                <p>Cloudy</p>
                <p>{cloudy}%</p>
            </div>
            <div>
                <p>Humidity</p>
                <p>{humidity}%</p>
            </div>
            <div>
                <p>Wind</p>
                <p>{wind} m/s</p>
            </div>
        </div>
    );
};

export default WeatherDetails;
