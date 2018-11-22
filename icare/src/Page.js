import React from 'react';

import './css/Page.css'

export default ({className, id, style, children}) =>
    <div className={`page ${className || ""}`} id={id} style={style}>
        {children}
    </div>;