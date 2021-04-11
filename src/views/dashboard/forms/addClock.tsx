import React, { useState } from "react";
import { Button, Card, Form, Input, Slider } from "antd";
import Clock from "../elements/clock";
import { render } from "@testing-library/react";

export default function ClockForm() {
  const [pies, addPie] = useState([<div></div>]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    addPie([
      ...pies,
      <div>
        <Clock slices={values.slices} name={values.name} />
      </div>,
    ]);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <Card title="Add a Progress Clock">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please Name Your Clock!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Slices"
            name="slices"
            rules={[{ required: true, message: "Please choose a number!" }]}
          >
            <Slider min={1} max={6} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {pies}
    </div>
  );
}
