import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import FTitle from "../../components/Title/FTitle";
import { ckGet,ckSet } from "../../comm-util";
import { Button, WingBlank } from "antd-mobile";

import {getUser} from '../../redux/actions/userInfo'

class App extends Component {
    render() {
    
        return (
            <WingBlank>
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "120px"
                    }}
                >
                    <img
                        src="/public/img/start.gif"
                        style={{
                            width: "50%"
                        }}
                    />
                    <br />
                    <br />
                    <br />
                    <h3 style={{ fontWeight: "400" }}>页面加载中...</h3>
                </div>
            </WingBlank>
        );
    }
}

export default connect((state) => ({userInfo: state.userInfo,getUser}))(App);
App.contextTypes = {
    router: React.PropTypes.object
};
