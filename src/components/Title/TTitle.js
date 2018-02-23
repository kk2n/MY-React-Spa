import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Icon ,Modal} from "antd-mobile";

const alert = Modal.alert;
export default class Nav extends Component {
    render() {
        if (this.props.ti) {
            return (
                <NavBar
                    mode="light"
                    icon={
                        <Icon
                            type="left"
                            size="lg"
                            className="fanhui-ico"
                            onClick={() => {
                                alert("测评未完成!确定要退出吗？", "　　", [
                                    {
                                        text: "取消",
                                        style: "default"
                                    },
                                    {
                                        text: "确定",
                                        onPress: () => history.back(),
                                    }
                                ]);
                                
                            }}
                        />
                    }
                >
                    {this.props.title}
                </NavBar>
            );
        }
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
            >
                {this.props.title}
            </NavBar>
        );
    }
}
