import "./Navigation.css"
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";

class Navigation extends Component {
  render() {
    return (
      <div class="div-navigation">
        <Menu
          defaultSelectedKeys={["/"]}
          selectedKeys={[this.props.location.pathname]}
          mode="horizontal"
        >
          <Menu.Item key="/done" class="div-menu-item">
            <Link to="/done">go to done page</Link>
          </Menu.Item>
          <Menu.Item key="/">
            <Link to="/">go to todo page</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navigation);
