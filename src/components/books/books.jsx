import React from 'react';

import './books.css';

const Books = (props) => (
    <div className='books'>
        {props.children}
    </div>
)

export default Books;