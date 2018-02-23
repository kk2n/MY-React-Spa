import React, { Component } from "react";
import getRouter from "router/router";
import '../../comm-sass/Comm.scss'
/*  
//给coolie设置值
ckSet("munberId", "55215");
ckSet("keys", "jq0787F07FE775567AF8B951A04EC66E4C");

//从coolie取值
const munberId = ckGet("munberId");
const keys = ckGet("keys");

!munberId &&
  !keys &&
  location.pathname !== "/error/null" &&
  (location.pathname = "/error/null"); 
  
*/

export default class App extends Component {
  render() {
    return <div>{getRouter()}</div>;
  }
}
