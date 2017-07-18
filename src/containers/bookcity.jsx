import React from 'react';
import Stores from '../stores';


import Content from '../components/content';

export default class Bookcity extends React.Component {
    constructor() {
        super();
        this.state = {
            imgHeight: 0
        }
        this.store = Stores;
    }
    componentWillMount() {

    }
    componentDidMount() {
        
        
    }
    clickhandle(e) {
        console.log(e.target.files[0].size)
    }
    render() {
        return (
            <div>
                <header className="header-bar">
                    <div className="buttons fs22 fcb back">
                        <a><i className="fa fa-chevron-left"></i></a>
                    </div>
                    <h1 className="title">123</h1>
                    <div className="buttons fs22 fcb">
                        <a><i className="fa fa-cog"></i></a>
                    </div>
                </header>
                <Content>
                </Content>
            </div>
        );

    }
};
