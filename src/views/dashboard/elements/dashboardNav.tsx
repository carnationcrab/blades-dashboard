import React, { useState } from "react";
import logo from "./logo.svg";
import { Button, Row, Col, Card } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import DiceRoller from "./diceRoller";
import Clock from "./clock";
import ClockForm from "../forms/addClock";
import DiceForm from "../forms/rollDice";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Dashboard() {
  const [content, setContent] = useState(<div></div>);

  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item
              key="1"
              onClick={() => {
                console.log("Roll Dice Selected");
                setContent(
                  <Card>
                    <DiceForm />
                  </Card>
                );
              }}
            >
              Roll Dice
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                console.log("Add Clock Selected");
                setContent(
                  <Card>
                    <ClockForm />
                  </Card>
                );
              }}
            >
              Add Clock
            </Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Layout>
        <Content>{content}</Content>
      </Layout>
    </div>
  );
}
