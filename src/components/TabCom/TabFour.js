import React, { Component } from "react";
import _ from "underscore";
let ReactHighcharts = require("react-highcharts");
let Highcharts = require("highcharts");
let exporting = require("highcharts/modules/exporting")(Highcharts);
// const HighchartsMore = require("highcharts/highcharts-more.js");
// HighchartsMore(Highcharts);
export default class TabOne extends Component {
 
    componentDidMount() {
        //theme
        Highcharts.theme = {
            colors: [
                "#2EEAB2",
                "#2EC9FA",
                "#f45b5b",
                "#7798BF",
                "#aaeeee",
                "#ff0066",
                "#eeaaee",
                "#55BF3B",
                "#DF5353",
                "#7798BF",
                "#aaeeee"
            ],
            chart: {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [[0, "#fff"], [1, "#fff"]]
                },
                style: {
                    fontFamily: "'Unica One', sans-serif",
                    height: "280px",
                    width: "92%"
                },
                plotBorderColor: "#f9f9f9"
            },
            title: {
                style: {
                    color: "#333",
                    textTransform: "uppercase",
                    fontSize: "18px"
                }
            },
            subtitle: {
                style: {
                    color: "#E0E0E3",
                    textTransform: "uppercase"
                }
            },
            xAxis: {
                gridLineColor: "#ddd",
                labels: {
                    style: {
                        color: "#333"
                    }
                },
                lineColor: "#ccc",
                minorGridLineColor: "#ddd",
                tickColor: "#ddd",
                title: {
                    style: {
                        color: "#000"
                    }
                }
            },
            yAxis: {
                gridLineColor: "#eee", //横向格子
                labels: {
                    style: {
                        color: "#333"
                    }
                },
                lineColor: "#707073",
                minorGridLineColor: "#ddd",
                tickColor: "#eee",
                tickWidth: 1,
                title: {
                    style: {
                        color: "#A0A0A3"
                    }
                }
            },
            tooltip: {
                backgroundColor: "#fff",
                style: {
                    color: "#333"
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: "#B0B0B3"
                    },
                    marker: {
                        lineColor: "#333"
                    }
                },
                boxplot: {
                    fillColor: "#333"
                },
                candlestick: {
                    lineColor: "#999"
                },
                errorbar: {
                    color: "white"
                }
            },
            legend: {
                itemStyle: {
                    color: "#333"
                },
                itemHoverStyle: {
                    color: "#FFF"
                },
                itemHiddenStyle: {
                    color: "#999"
                }
            },
            credits: {
                style: {
                    color: "#666"
                }
            },
            labels: {
                style: {
                    color: "#707073"
                }
            },

            drilldown: {
                activeAxisLabelStyle: {
                    color: "#F0F0F3"
                },
                activeDataLabelStyle: {
                    color: "#F0F0F3"
                }
            },

            navigation: {
                buttonOptions: {
                    symbolStroke: "#DDDDDD",
                    theme: {
                        fill: "#505053"
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: "#505053",
                    stroke: "#000000",
                    style: {
                        color: "#CCC"
                    },
                    states: {
                        hover: {
                            fill: "#707073",
                            stroke: "#000000",
                            style: {
                                color: "white"
                            }
                        },
                        select: {
                            fill: "#000003",
                            stroke: "#000000",
                            style: {
                                color: "white"
                            }
                        }
                    }
                },
                inputBoxBorderColor: "#505053",
                inputStyle: {
                    backgroundColor: "#333",
                    color: "silver"
                },
                labelStyle: {
                    color: "silver"
                }
            },

            navigator: {
                handles: {
                    backgroundColor: "#666",
                    borderColor: "#AAA"
                },
                outlineColor: "#CCC",
                maskFill: "rgba(255,255,255,0.1)",
                series: {
                    color: "#7798BF",
                    lineColor: "#A6C7ED"
                },
                xAxis: {
                    gridLineColor: "#505053"
                }
            },

            scrollbar: {
                barBackgroundColor: "#808083",
                barBorderColor: "#808083",
                buttonArrowColor: "#CCC",
                buttonBackgroundColor: "#606063",
                buttonBorderColor: "#606063",
                rifleColor: "#FFF",
                trackBackgroundColor: "#f00",
                trackBorderColor: "#f00"
            },

            // special colors for some of the
            legendBackgroundColor: "rgba(0, 0, 0, 0.5)",
            background2: "#505053",
            dataLabelsColor: "#f00",
            textColor: "#333",
            contrastTextColor: "#F0F0F3",
            maskColor: "rgba(255,255,255,0.3)"
        };
        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);
    }

    render() {
        return (
            <div>
                <div className="table-com">
                    <div className="zhu-ti-title qushitu-tit">趋势图
                    <div className="kemu-list qushitu">
                        <ul>
                            {/* 循环z分和排名 */}
                            {this.props.zp.map((obj, aa) => {
                                return (
                                    <li
                                        key={aa}
                                        className={obj.cked ? "zp on" : "zp"}
                                        data-id={obj.id}
                                        onClick={e => {
                                            let id = e.target.dataset.id;
                                            this.props.handksChangezp(id);
                                        }}
                                    >
                                        {obj.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    </div>
                    
                    <div className="kemu-list qushi-ke">
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
                    <ReactHighcharts config={this.props.leidaData || {}} />
                </div>
                <div className="table-com table-zhuz">
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}
