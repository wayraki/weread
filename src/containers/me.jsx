import React from 'react';
import Reflux from 'reflux';
import {
    Panel,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';

import Actions from '../actions';
import Stores from '../stores';

import Content from '../components/content';
import icon_1 from '../../public/image/icon/me_1.png';
import icon_2 from '../../public/image/icon/me_2.png';
import icon_3 from '../../public/image/icon/me_3.png';
import icon_4 from '../../public/image/icon/me_4.png';
import icon_5 from '../../public/image/icon/me_5.png';
import icon_6 from '../../public/image/icon/me_6.png';

export default class Discover extends Reflux.Component {
    constructor() {
        super();
        this.store = Stores;
    }
    componentDidMount() {
        Actions.getUserInfo();
    }
    render() {
        let userInfo = this.state.userInfo;
        return (
            <div className="me-content">
                <header className="header-bar">
                    <div className="buttons fs22 fcb back">
                        <a><i className="fa fa-envelope-o"></i></a>
                    </div>
                    <h1 className="title">{userInfo.userName}</h1>
                    <div className="buttons fs22 fcb">
                        <a><i className="fa fa-cog"></i></a>
                    </div>
                </header>
                <Content style={{ backgroundColor: '#f3f3f3' }}>
                    <div className="user-img">
                        <img src="https://img3.doubanio.com/spic/s29157682.jpg" alt="" />
                        <p className="fs14 fc6">编辑个人资料</p>
                    </div>
                    <Panel>
                        <Cell access>
                            <CellHeader>
                                <img src={icon_1} alt="" style={{ display: 'block', width: '20px', marginRight: '5px' }} />
                            </CellHeader>
                            <CellBody>账户</CellBody>
                            <CellFooter><p className="fs14 fc6">{userInfo.userAccount ? userInfo.userAccount.balance : null}</p><p className="fs12 fc9">已购{userInfo.userAccount ? userInfo.userAccount.purchase.length : null}本书</p></CellFooter>
                        </Cell>
                        <Cell access>
                            <CellHeader>
                                <img src={icon_2} alt="" style={{ display: 'block', width: '20px', marginRight: '5px' }} />
                            </CellHeader>
                            <CellBody>好友排名</CellBody>
                            <CellFooter><p className="fs14 fc6">第{userInfo.ranking ? userInfo.ranking.placing : null}名</p><p className="fs12 fc9">{userInfo.ranking ? (Math.floor(userInfo.ranking.time / 60) > 0 ? Math.floor(userInfo.ranking.time / 60) + '小时' : '') + (userInfo.ranking.time % 60 + '分钟') : null}</p></CellFooter>
                        </Cell>
                    </Panel>
                    <Panel>
                        <Cell access>
                            <CellHeader>
                                <img src={icon_3} alt="" style={{ display: 'block', width: '20px', marginRight: '5px' }} />
                            </CellHeader>
                            <CellBody>关注</CellBody>
                            <CellFooter><p className="fs14 fc6">{userInfo.concern ? userInfo.concern.concerned.length : null}人关注我</p><p className="fs12 fc9">已关注{userInfo.concern ? userInfo.concern.beConcerned.length : null}人</p></CellFooter>
                        </Cell>
                        <Cell access>
                            <CellHeader>
                                <img src={icon_4} alt="" style={{ display: 'block', width: '20px', marginRight: '5px' }} />
                            </CellHeader>
                            <CellBody>笔记</CellBody>
                            <CellFooter><p className="fs14 fc6">{userInfo.note ? userInfo.note.tatol : null}个</p><p className="fs12 fc9">{userInfo.note ? userInfo.note.praise : null}个赞{userInfo.note ? userInfo.note.comment : null}个评论</p></CellFooter>
                        </Cell>
                        <Cell access>
                            <CellHeader>
                                <img src={icon_5} alt="" style={{ display: 'block', width: '20px', marginRight: '5px' }} />
                            </CellHeader>
                            <CellBody>音频</CellBody>
                            <CellFooter><p className="fs14 fc6">用声音传递文字的力量</p></CellFooter>
                        </Cell>
                        <Cell access>
                            <CellHeader>
                                <img src={icon_6} alt="" style={{ display: 'block', width: '20px', marginRight: '5px' }} />
                            </CellHeader>
                            <CellBody>书单</CellBody>
                            <CellFooter><p className="fs14 fc6">{userInfo.bookMenu ? userInfo.bookMenu.length : null}个</p></CellFooter>
                        </Cell>
                    </Panel>
                </Content>
            </div>
        );
    }
};
