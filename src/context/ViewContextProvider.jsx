import { createContext, useRef } from 'react';

export const ViewContext = createContext();

const ViewContextProvider = ({ children }) => {
    const homeRef = useRef(null);
    const citiesRef = useRef(null);
    const newsRef = useRef(null);

    const handleView = (type) => {
        let ref = newsRef;
        if (type == 'home') ref = homeRef;
        else if (type == 'cities') ref = citiesRef;
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ViewContext.Provider
            value={{ handleView, homeRef, citiesRef, newsRef }}
        >
            {children}
        </ViewContext.Provider>
    );
};

export default ViewContextProvider;
