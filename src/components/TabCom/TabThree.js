import React, { Component } from "react";
import { Icon } from "antd-mobile";
import _ from "underscore";
import "../../comm-util/prototype";
export default class TabOne extends Component {
    static defaultProps = {
        kemuarr: []
    };
    render() {
        return (
            <div>
                {/* 表格数据 */}
                <div className="table-com">
                    <div className="kemu-list">
                        <ul
                            style={{
                                width: 100 * this.props.kemuarr.length + "px"
                            }}
                        >
                            {/* 循环所有的科目 */}
                            {this.props.kemuarr.map((obj, aa) => {
                                return (
                                    <li
                                        key={aa}
                                        className={obj.cked ? "on" : ""}
                                        data-id={obj.id}
                                        onClick={e => {
                                            let id = e.target.dataset.id;
                                            this.props.handksChange(id);
                                        }}
                                    >
                                        {obj.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="table-ceng bdt-f">
                        <table>
                            <thead>
                                <tr>
                                    <th>考试类型</th>
                                    <th>年级</th>
                                    <th>
                                        {_.find(this.props.kemuarr, a => {
                                            return a.cked;
                                        })
                                            ? _.find(this.props.kemuarr, a => {
                                                  return a.cked;
                                              }).name
                                            : null}
                                    </th>
                                    <th>等级</th>
                                    {/*<th>年级平均分</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* 分数表格循环 */}
                                {this.props.tabledata.map((a, aa) => {
                                    return (
                                        <tr key={aa}>
                                            {a.map((b, bb) => {
                                                return <td key={bb}>{b}</td>;
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
