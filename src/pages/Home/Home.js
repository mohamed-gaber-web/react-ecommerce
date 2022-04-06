import React from 'react';
import Slider from '../../components/Slider/Slider';

import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.home}>
            <Slider />
        </div>
    );
}

export default Home;