import React from 'react';

import './book.css';

const Book = (props) => (
    <div className='book-item'>
        <img src={props.book.images.small} alt={props.book.title} />
        <p>{props.book.title}</p>
    </div>
)

export default Book;