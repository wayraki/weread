import React from 'react';

import './content.css';

/**
 * Content
 *
 */
const Content = (props) => (
  <div className="content-box" style={props.style}>
    {props.children}
  </div>
)

export default Content;