import React from 'react';
import bulletLoaded from '../assets/bullet.svg';
import bulletEmpty from '../assets/bullet.svg';

export const Bullet = ({ loaded }) => (
    <div>
        {loaded && <img style={styles.bulletIconStyle} src={bulletLoaded} alt="bullet loaded"/>}
        {!loaded && <img style={{...styles.bulletIconStyle,...styles.empty}} src={bulletEmpty} alt="bullet empty" />}
    </div>
);

const styles = {
    bulletIconStyle: {
        width: '40px'
    },
    empty: {
        opacity: '0.2'
    }

}