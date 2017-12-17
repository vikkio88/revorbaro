import React from 'react';

export const LastAction = ({ action }) => (
    <div>
        {!action && <strong> - </strong>}
        {action && <strong> {action}</strong>}
    </div>
);
