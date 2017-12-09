import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab, TabBody, TabBar, TabBarItem } from 'react-weui';
import 'weui';

import { setMainTab } from '../redux/actions'

import Discover from './discover';
import Shelf from './shelf';
import Say from './say';
import Me from './me';

import icon_discover from '../static/image/icon/discover.svg'
import icon_discover_on from '../static/image/icon/discover_on.svg'
import icon_shelf from '../static/image/icon/shelf.svg'
import icon_shelf_on from '../static/image/icon/shelf_on.svg'
import icon_say from '../static/image/icon/say.svg'
import icon_say_on from '../static/image/icon/say_on.svg'
import icon_me from '../static/image/icon/me.svg'
import icon_me_on from '../static/image/icon/me_on.svg'

class Home extends Component {
    static PropTypes = {
        tab: PropTypes.number.isRequired,
        onSetMainTab: PropTypes.func.isRequired
    }
    setTab(value) {
        console.log(this.props)
        if (this.props.onSetMainTab) {
            this.props.onSetMainTab(value)
        }
    }
    render() {
        return (<Tab>
            <TabBody>
                <section style={{ display: this.props.tab === 0 ? null : 'none' }}>
                    <Discover />
                </section>
                <section style={{ display: this.props.tab === 1 ? null : 'none' }}>
                    <Shelf />
                </section>
                <section style={{ display: this.props.tab === 2 ? null : 'none' }}>
                    <Say />
                </section>
                <section style={{ display: this.props.tab === 3 ? null : 'none' }}>
                    <Me />
                </section>
            </TabBody>
            <TabBar>
                <TabBarItem
                    active={this.props.tab === 0}
                    onClick={e => this.setTab(0)}
                    icon={<img src={this.props.tab === 0 ? icon_discover_on : icon_discover} alt='discover' />}
                    label="发现" />
                <TabBarItem
                    active={this.props.tab === 1}
                    onClick={e => this.setTab(1)}
                    icon={<img src={this.props.tab === 1 ? icon_shelf_on : icon_shelf} alt='shelf' />}
                    label="书架" />
                <TabBarItem
                    active={this.props.tab === 2}
                    onClick={e => this.setTab(2)}
                    icon={<img src={this.props.tab === 2 ? icon_say_on : icon_say} alt='say' />}
                    label="想法" />
                <TabBarItem
                    active={this.props.tab === 3}
                    onClick={e => this.setTab(3)}
                    icon={<img src={this.props.tab === 3 ? icon_me_on : icon_me} alt='me' />}
                    label="我" />
            </TabBar>
        </Tab>
        );
    }
};

const mapStateToProps = state => ({
    tab: state.app.tab
})

const mapDispatchToProps = dispatch => ({
    onSetMainTab: tab => {
        dispatch(setMainTab(tab))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)