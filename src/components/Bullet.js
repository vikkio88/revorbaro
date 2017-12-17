import React from 'react';
import bulletLoaded from '../assets/bullet.svg';
import bulletEmpty from '../assets/bullet.svg';

export const Bullet = ({ loaded }) => (
    <div>
        {loaded && <img style={styles.bulletIcon} src={bulletLoaded} alt="bullet loaded"/>}
        {!loaded && <img style={{...styles.bulletIcon,...styles.empty}} src={bulletEmpty} alt="bullet empty" />}
    </div>
);

const styles = {
    bulletIcon: {
        width: '40px'
    },
    empty: {
        opacity: '0.2'
    }

}