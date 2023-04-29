import React, { useContext, useRef } from 'react';
import { ViewContext } from '../context/ViewContextProvider';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    const { handleView } = useContext(ViewContext);

    return (
        <nav className={styles.container}>
            <ul>
                <li onClick={() => handleView('home')}>Home</li>
                <li onClick={() => handleView('cities')}>Search</li>
            </ul>
        </nav>
    );
};

export default Navbar;
