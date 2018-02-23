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
            src="/public/img/page404@2x.png"
            style={{
              width: "90%"
            }}
          />
          <br />
          <div>
            <h3 style={{ fontWeight: "400",color:"#999" }}>页面走失了......</h3>
            <br />
            <br />
            {/*<Button*/}
              {/*onClick={() => {*/}
                {/*this.context.router.history.goBack();*/}
              {/*}}*/}
            {/*>*/}
              {/*刷新*/}
            {/*</Button>*/}
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
