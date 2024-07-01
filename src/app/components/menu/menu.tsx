import React from 'react';
import styles from './menu.module.css';

const Menu: React.FC = () => {
    return (
        <nav className={styles.navbar}>
        <a href="">Médicos</a>
        <a href="">Medicamentos</a>
        <a href="">Exámenes</a>
        </nav>
    );
};
export default Menu