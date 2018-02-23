import React, { Component } from "react";
import { WingBlank, Button } from "antd-mobile";

class App extends Component {
  render() {
    return (
      <WingBlank>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          <img
            src="/public/img/pageerr@2x.png"
            style={{
              width: "90%"
            }}
          />
          <br />
          <br />
          <div>
            <h3 style={{ fontWeight: "400", color: "#999" }}>
              未找到正确的学生ID,请重新登录。
            </h3>
            <br />
            <br />
            <Button
              onClick={() => {
                this.context.router.history.goBack();
              }}
            >
              刷新
            </Button>
          </div>
        </div>
      </WingBlank>
    );
  }
}
App.contextTypes = {
  router: React.PropTypes.object
};
export default App;
