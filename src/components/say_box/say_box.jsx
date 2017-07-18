import React from 'react';
import {
    Panel,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cell
} from 'react-weui';

import './say_box.css';

/**
 * SayBox
 *
 */
const SayBox = (props) => {
    return (
        <Panel className="say-box">
            <PanelBody>
                <MediaBox type="appmsg">
                    <MediaBoxHeader><img src="https://img3.doubanio.com/spic/s29157682.jpg" alt="" /></MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>LisaLeung 点评此书</MediaBoxTitle>
                        <MediaBoxDescription>
                            撇開哲學部份不說，單是小說故事就相當精彩，給人予深刻的啓發。作者用故事來回答了上帝或宿命的存在下，我們該如何活下去的問題。這是存在主義的抗爭。人類通過理性獲得了自由。
                        </MediaBoxDescription>
                        <Cell access link>查看</Cell>
                        <MediaBox type="appmsg" className="book-box">
                            <MediaBoxHeader><img src="https://img3.doubanio.com/spic/s29157682.jpg" alt="" /></MediaBoxHeader>
                            <MediaBoxBody>
                                <MediaBoxTitle>苏菲的世界</MediaBoxTitle>
                                <MediaBoxDescription>乔斯坦·贾德</MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                        <MediaBoxInfo>
                            <MediaBoxInfoMeta>2016-8-8</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta className="f-fr"><i className="fa fa-comment-o"></i></MediaBoxInfoMeta>
                            <MediaBoxInfoMeta className="f-fr"><i className="fa fa-heart-o"></i></MediaBoxInfoMeta>
                            <MediaBoxInfoMeta className="f-fr"><i className="fa fa-share"></i></MediaBoxInfoMeta>
                        </MediaBoxInfo>
                    </MediaBoxBody>
                </MediaBox>
            </PanelBody>
        </Panel>
    );
};

export default SayBox;