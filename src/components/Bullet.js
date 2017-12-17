import React from 'react';
import bulletLoaded from '../assets/bullet.svg';
import bulletEmpty from '../assets/bullet.svg';

export const Bullet = ({ loaded }) => (
    <div>
        {loaded && <img style={styles.bulletIconStyle} src={bulletLoaded} />}
        {!loaded && <img style={{...styles.bulletIconStyle,...styles.empty}} src={bulletEmpty} />}
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