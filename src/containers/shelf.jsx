import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchJsonp from 'fetch-jsonp'

import { setMainTab } from '../redux/actions'

import Header from '../components/header';
import Content from '../components/content';
import Books from '../components/books';
import Book from '../components/book';

class Shelf extends Component {
    constructor() {
        super();
        this.state={
            shelfBooks:[]
        }
    }
    componentDidMount() {
        let that = this;
        fetchJsonp('https://api.douban.com/v2/book/search?q=python&fields=id,title,images&count=5').then(function (response) {
            return response.json()
        }).then(function (json) {
            that.setState({ shelfBooks: json.books });
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }
    render() {
        return (
            <div>
                <Header title='书架'>
                    <div className='buttons'><Link to="/bookcity">书城</Link></div>
                </Header>
                <Content>
                    <Books>{this.state.shelfBooks.map((book, key) => <Book book={book} key={key}></Book>)}</Books>
                    <div className="weui-loadmore weui-loadmore_line"><span className="weui-loadmore__tips">5本公开阅读·0本私密阅读</span></div>
                </Content>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    books: state.getShelfBooks.books
})

const mapDispatchToProps = dispatch => ({
    onSetMainTab: tab => {
        dispatch(setMainTab(tab))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shelf)