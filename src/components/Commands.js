import React from 'react';
import { resolveActions, ATTACK, DEFEND, RELOAD } from '../lib';
export const Commands = ({ postAction, player, computer }) => (
    <div>
        <button disabled={!player.loaded} onClick={() => postAction(resolveActions(ATTACK, { player, computer }))}>Shoot</button>
        <button onClick={() => postAction(resolveActions(RELOAD, { player, computer }))}>Reload</button>
        <button onClick={() => postAction(resolveActions(DEFEND, { player, computer }))}>Dodge</button>
    </div>
);