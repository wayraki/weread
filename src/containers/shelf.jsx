import React from 'react';
import { Link } from 'react-router';
import Reflux from 'reflux';

import Actions from '../actions';
import Stores from '../stores';

import Header from '../components/header';
import Content from '../components/content';
import Books from '../components/books';
import Book from '../components/book';

export default class Shelf extends Reflux.Component {
    constructor() {
        super();
        this.store = Stores;
    }
    componentDidMount() {
        Actions.getShelfBooks();
    }
    render() {
        return (
            <div>
                <Header title='书架'>
                    <div className='buttons'><Link to="/bookcity" activeStyle={{ color: 'red' }}>书城</Link></div>
                </Header>
                <Content>
                    <Books>{this.state.shelfBooks.map((book, key) => <Book book={book} key={key}></Book>)}</Books>
                    <div className="weui-loadmore weui-loadmore_line"><span className="weui-loadmore__tips">5本公开阅读·0本私密阅读</span></div>
                </Content>
            </div>
        );
    }
};
