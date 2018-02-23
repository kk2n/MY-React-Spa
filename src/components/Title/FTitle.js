import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Icon, } from "antd-mobile";
export default class Nav extends Component {
    render() {
        return (
            <NavBar
                mode="light"
                icon={
                    <Icon
                        type="left"
                        size="lg"
                        className="fanhui-ico"
                        onClick={() => {
                            history.back();
                        }}
                    />
                }
                // rightContent={[<Icon key="1" type="ellipsis" />]}
            >
                翼生涯
            </NavBar>
        );
    }
}
