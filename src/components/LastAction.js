import React from 'react';
import { ATTACK, DEFEND, RELOAD } from '../lib';

import reload from '../assets/reload.svg';
import shoot from '../assets/shoot.svg';
import shield from '../assets/shield.svg';

const ICON_MAPPING = {
    [ATTACK]: shoot,
    [DEFEND]: shield,
    [RELOAD]: reload,
};

export const LastAction = ({ action }) => (
    <div>
        {!action && <p />}
        {action && <img style={styles.bulletIcon} src={ICON_MAPPING[action]} alt={action} />}
    </div>
);


const styles = {
    bulletIcon: {
        width: '40px'
    }
};