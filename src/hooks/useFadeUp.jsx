import React, { useEffect, useRef } from 'react';

const useFadeUp = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        element.classList.add('fade-up');

        const handleScroll = () => {
            const position = element.getBoundingClientRect().top;

            if (position < window.innerHeight) {
                element.classList.add('fade-up--active');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ref;
};

export default useFadeUp;
