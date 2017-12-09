import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import Content from '../components/content';

export default class Discover extends React.Component {
    render() {
        let styles = {};
        styles.fill = {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#eee'
        }

        return (
            <div style={styles.fill}>
                <Header title='发现'>
                    <div className='buttons'><Link to="/bookcity">FM42|3</Link></div>
                </Header>
                <Content>
                    123123123213123
                </Content>
            </div>
        );
    }
};
