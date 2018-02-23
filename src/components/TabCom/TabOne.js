import React, { Component } from "react";
import { Icon } from "antd-mobile";
import _ from "underscore";
export default class TabOne extends Component {
    render() {
        return (
            <div>
                {/* 表格数据 */}
                <div className="table-com">
                    <div className="table-ceng">
                        <table>
                            <thead>
                                <tr>
                                    <th>科目</th>
                                    <th>我的分数</th>
                                    <th>班级平均分</th>
                                    <th>年级平均分</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* 分数表格循环 */}
                                {this.props.dataFen.map((a, aa) => {
                                    return (
                                        <tr key={aa}>
                                            {a.map((b, bb) => {
                                                return <td key={bb}>{b}</td>;
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table><br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}
