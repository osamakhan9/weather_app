import React, { useContext, useEffect, useState } from 'react';
import styles from './styles/Home.module.css';
import Navbar from './Navbar';
import WeatherDetails from './WeatherDetails';
import WeatherMain from './WeatherMain';
import { ViewContext } from '../context/ViewContextProvider';
import axios from 'axios';
import { HelpContext } from '../context/HelpContextProvider';

const Home = () => {
    const { homeRef } = useContext(ViewContext);
    const [data, setData] = useState(null);
    const [image, setImage] = useState('');
    const { API, KEY, imagePath, kelvinToCelsius } = useContext(HelpContext);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                axios
                    .get(
                        `${API}?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${KEY}`
                    )
                    .then((res) => {
                        setData(res.data);
                        setImage(
                            require(`../assets/${
                                imagePath[
                                    res.data.weather[0].main.toLowerCase()
                                ]
                                    ? res.data.weather[0].main.toLowerCase()
                                    : 'atmosphere'
                            }.jpg`)
                        );
                    })
                    .catch((err) => console.log(err));
            },
            (err) => {
                axios
                    .get(`${API}?q=Mumbai&appid=${KEY}`)
                    .then((res) => {
                        setData(res.data);
                        setImage(
                            require(`../assets/${
                                imagePath[
                                    res.data.weather[0].main.toLowerCase()
                                ]
                                    ? res.data.weather[0].main.toLowerCase()
                                    : 'atmosphere'
                            }.jpg`)
                        );
                    })
                    .catch((err) => console.log(err));
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            }
        );
    }, []);

    return (
        <>
            <div
                className={styles.container}
                ref={homeRef}
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <Navbar />
                <WeatherDetails
                    cloudy={data?.clouds.all}
                    humidity={data?.main.humidity}
                    wind={data?.wind.speed}
                />
                <WeatherMain
                    temp={kelvinToCelsius(data?.main.temp)}
                    city={data?.name}
                    id={data?.weather[0].icon}
                />
            </div>
        </>
    );
};

export default Home;
