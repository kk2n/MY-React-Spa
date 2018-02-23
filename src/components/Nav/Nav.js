import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>教学评价</li>
                    <li>
                        <Link to="/userinfo">UserInfo</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
