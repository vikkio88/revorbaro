import React from 'react';
import './styles/Commands.css';

import reload from '../assets/reload.svg';
import shoot from '../assets/shoot.svg';
import shield from '../assets/shield.svg';

import { resolveActions, ATTACK, DEFEND, RELOAD } from '../lib';
export const Commands = ({ postAction, player, computer }) => (
    <div className="action-wrapper">
        <button className="action-button" disabled={!player.loaded} onClick={() => postAction(resolveActions(ATTACK, { player, computer }))}>
            <img className="icon" style={!player.loaded ? styles.disabled : null} src={shoot} alt="Shoot" />
            <span>Shoot</span>
        </button>
        <button className="action-button" onClick={() => postAction(resolveActions(RELOAD, { player, computer }))}>
            <img className="icon" src={reload} alt="Reload" />
            <span>Reload</span>
        </button>
        <button className="action-button" onClick={() => postAction(resolveActions(DEFEND, { player, computer }))}>
            <img className="icon" src={shield} alt="Dodge" />
            <span>Dogde</span>
        </button>
    </div>
);

const styles = {
    disabled: {
        opacity: 0.4
    }
}