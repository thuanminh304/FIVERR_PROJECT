import React from "react";
import withLayout from "../hocs/withLayout";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined, ProfileOutlined } from "@ant-design/icons";
import "../containers/admin/admin.css";
import { Link, Redirect, NavLink } from "react-router-dom";
import "containers/admin/admin.css";
import { useSelector } from "react-redux";
const { Header, Content, Sider } = Layout;

//
function AdminLayout(props) {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  return currentUser ? (
    currentUser.role === "ADMIN" ? (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            className="top-menu-hidden"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={220} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu key="sub1">
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/admin/quan-ly-nguoi-dung">User Management</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ProfileOutlined />}>
                  <NavLink to="/admin/job-management">NavLink management</NavLink>
                </Menu.Item>
              </Menu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    ) : (
      <Redirect to="/" />
    )
  ) : (
    <Redirect to="/" />
  );
}

export default withLayout(AdminLayout);
