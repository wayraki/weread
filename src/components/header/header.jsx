import React from 'react';

import './header.css';

/**
 * Header
 *
 */
const Header = (props) => {

    let rightButton;
    if (!props.rightButton) {
        rightButton = null
    } else if (Object.prototype.toString.call(props.rightButton) === '[object Array]') {
        rightButton.map((rightButton, key) => <button key={key} onClick={rightButton.onClick}>{rightButton.name}</button>)
    } else {
        rightButton = <button onClick={props.rightButton.onClick}>{props.rightButton.name}</button>
    }

    return (
        <header className='header-bar'>
            {props.leftBack
                ? <button onClick='backHandle'>返回</button>
                : null}
            <h1 className='title'>{props.title}</h1>
            {props.children}
        </header>
    );
};

export default Header;