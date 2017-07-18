import React from 'react';
import Reflux from 'reflux';
import { Tab, TabBody, TabBar, TabBarItem } from 'react-weui';
import 'weui';

import Discover from './containers/discover';
import Shelf from './containers/shelf';
import Say from './containers/say';
import Me from './containers/me';

import Actions from './actions';
import Stores from './stores';

import icon_discover from '../public/image/icon/discover.svg'
import icon_discover_on from '../public/image/icon/discover_on.svg'
import icon_shelf from '../public/image/icon/shelf.svg'
import icon_shelf_on from '../public/image/icon/shelf_on.svg'
import icon_say from '../public/image/icon/say.svg'
import icon_say_on from '../public/image/icon/say_on.svg'
import icon_me from '../public/image/icon/me.svg'
import icon_me_on from '../public/image/icon/me_on.svg'

export default class Home extends Reflux.Component {
    constructor() {
        super();
        this.store = Stores;
    }
    setTab(value) {
        Actions.setTab(value)
    }
    render() {
        return (
            <Tab>
                <TabBody>
                    <section style={{ display: this.state.tab === 0 ? null : 'none' }}>
                        <Discover />
                    </section>
                    <section style={{ display: this.state.tab === 1 ? null : 'none' }}>
                        <Shelf />
                    </section>
                    <section style={{ display: this.state.tab === 2 ? null : 'none' }}>
                        <Say />
                    </section>
                    <section style={{ display: this.state.tab === 3 ? null : 'none' }}>
                        <Me />
                    </section>
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab === 0}
                        onClick={e => this.setTab(0)}
                        icon={<img src={this.state.tab === 0 ? icon_discover_on : icon_discover} alt='discover' />}
                        label="发现" />
                    <TabBarItem
                        active={this.state.tab === 1}
                        onClick={e => this.setTab(1)}
                        icon={<img src={this.state.tab === 1 ? icon_shelf_on : icon_shelf} alt='shelf' />}
                        label="书架" />
                    <TabBarItem
                        active={this.state.tab === 2}
                        onClick={e => this.setTab(2)}
                        icon={<img src={this.state.tab === 2 ? icon_say_on : icon_say} alt='say' />}
                        label="想法" />
                    <TabBarItem
                        active={this.state.tab === 3}
                        onClick={e => this.setTab(3)}
                        icon={<img src={this.state.tab === 3 ? icon_me_on : icon_me} alt='me' />}
                        label="我" />
                </TabBar>
            </Tab>
        );
    }
};
