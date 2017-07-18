import React from 'react';
import Reflux from 'reflux';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import Stores from '../stores';

import Content from '../components/content';
import SayBox from '../components/say_box';


export default class Discover extends Reflux.Component {
    constructor() {
        super();
        this.state = {
            titleActive: 0
        }
        this.store = Stores;
    }
    componentDidMount() {
    }
    titleHandle(value) {
        this.setState({
            titleActive: value
        })
    }
    editHandle() {
        console.log(111);
    }
    render() {
        return (
            <div className="say-content">
                <header className='header-bar'>
                    <h1 className='title fc6'>
                        <span className={this.state.titleActive === 0 ? 'fcb' : null} onTouchTap={this.titleHandle.bind(this, 0)}>关注的人</span>
                        &nbsp;
                        <span className={this.state.titleActive === 1 ? 'fcb' : null} onTouchTap={this.titleHandle.bind(this, 1)}>精选想法</span>
                    </h1>
                    <div className='buttons fs22 fcb'>
                        <a onTouchTap={this.editHandle.bind(this)}><i className="fa fa-pencil"></i></a>
                    </div>
                </header>
                <Content style={{ backgroundColor: '#eee' }}>
                    <SayBox></SayBox>
                    <SayBox></SayBox>
                    <SayBox></SayBox>
                </Content>
            </div>
        );
    }
};
