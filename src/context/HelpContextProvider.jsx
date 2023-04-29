import { createContext } from 'react';

export const HelpContext = createContext();

const HelpContextProvider = ({ children }) => {
    const KEY = process.env.REACT_APP_API_KEY;
    const API = process.env.REACT_APP_API_URL;
    const ICON = process.env.REACT_APP_ICON_URL;
    const FORECAST = process.env.REACT_APP_FORECAST;

    const kelvinToCelsius = (k) => {
        return Math.floor(k - 273.15);
    };

    const imagePath = {
        thunderstorm: 1,
        drizzle: 1,
        snow: 1,
        rain: 1,
        clear: 1,
        clouds: 1,
    };

    const date = new Date();

    const dayOfWeek = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    };

    return (
        <HelpContext.Provider
            value={{
                KEY,
                API,
                ICON,
                FORECAST,
                kelvinToCelsius,
                imagePath,
                date,
                dayOfWeek,
            }}
        >
            {children}
        </HelpContext.Provider>
    );
};

export default HelpContextProvider;
