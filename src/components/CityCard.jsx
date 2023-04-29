import React, { useContext, useEffect, useState } from 'react';
import styles from './styles/CityCard.module.css';
import axios from 'axios';
import { HelpContext } from '../context/HelpContextProvider';

const CityCard = ({ city }) => {
    const [data, setData] = useState(null);
    const { API, KEY, imagePath, kelvinToCelsius, date } =
        useContext(HelpContext);
    const [image, setImage] = useState('');

    useEffect(() => {
        axios
            .get(`${API}?q=${city}&appid=${KEY}`)
            .then((res) => {
                setData(res.data);
                setImage(
                    require(`../assets/${
                        imagePath[res.data.weather[0].main.toLowerCase()]
                            ? res.data.weather[0].main.toLowerCase()
                            : 'atmosphere'
                    }.jpg`)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }, [city]);

    return (
        <div className={styles.container}>
            <div className={styles.part1}>
                <img src={image} alt={data?.weather[0].main} />
                <p>{data?.weather[0].main}</p>
            </div>
            <div className={styles.part2}>
                <h1>
                    {kelvinToCelsius(data?.main.temp)} <sup>°</sup>
                </h1>
                <span>
                    <strong>{data?.name}</strong>
                    <p>
                        {date.getMonth() + 1}/{date.getDate()}/
                        {date.getFullYear()}
                    </p>
                </span>
            </div>
        </div>
    );
};

export default React.memo(CityCard);
