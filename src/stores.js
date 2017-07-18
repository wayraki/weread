import Reflux from 'reflux';
import fetchJsonp from 'fetch-jsonp';

import Actions from './actions';

export default class Stores extends Reflux.Store {
    constructor() {
        super();
        this.state = {
            tab: 0,
            shelfBooks: [],
            userInfo: {}
        };
        this.listenables = Actions;
    }
    onSetTab(value) {
        this.setState({
            tab: value
        });
    }
    onGetShelfBooks() {
        let that = this;
        fetchJsonp('https://api.douban.com/v2/book/search?q=python&fields=id,title,images&count=5').then(function (response) {
            return response.json()
        }).then(function (json) {
            that.trigger({ shelfBooks: json.books });
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }
    onGetUserInfo() {
        this.trigger({
            userInfo: {
                userName: 'wayraki',
                userAccount: {
                    balance: 20.08,
                    giveaway: 8.00,
                    purchase: [{}, {}, {}, {}, {}, {}, {}, {}]
                },
                ranking: {
                    placing: 1,
                    time: 248,
                    rankList: [{}, {}, {}, {}, {}, {}]
                },
                concern: {
                    concerned: [{}, {}, {}, {}, {}, {}],
                    beConcerned: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
                },
                note: {
                    tatol: 5,
                    praise: 15,
                    comment: 8
                },
                bookMenu: [{}]
            }
        });
    }
};