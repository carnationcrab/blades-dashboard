import { Card, Input, Form, Slider, Button, Radio } from "antd";
import React, { useState } from "react";
import DiceRoller from "../elements/diceRoller";

function DiceForm() {
  const [diceData, setDiceData] = useState(<div></div>);

  function onFinish(values: any) {
    console.log("Success:", values);
    setDiceData(
      <div>
        <DiceRoller rollData={values}></DiceRoller>
      </div>
    );
  }

  function onFinishFailed(errorInfo: any) {
    console.log("Failed:", errorInfo);
  }

  return (
    <div className="App">
      <Card title="Roll Dice">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Action Rating"
            name="action"
            rules={[
              { required: true, message: "Please choose an Action Rating!" },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="skirmish">Skirmish</Radio.Button>
              <Radio.Button value="hunt">Hunt</Radio.Button>
              <Radio.Button value="prowl">Prowl</Radio.Button>
              <Radio.Button value="wreck">Wreck</Radio.Button>
              <Radio.Button value="command">Command</Radio.Button>
              <Radio.Button value="sway">Sway</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Position"
            name="position"
            rules={[{ required: true, message: "Please choose a position!" }]}
          >
            <Radio.Group>
              <Radio.Button value="controlled">Controlled</Radio.Button>
              <Radio.Button value="risky">Risky</Radio.Button>
              <Radio.Button value="desperate">Desperate</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Effect Level"
            name="effect"
            rules={[
              { required: true, message: "Please choose an effect level!" },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="limited">Limited</Radio.Button>
              <Radio.Button value="standard">Standard</Radio.Button>
              <Radio.Button value="great">Great</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Assistance"
            name="assist"
            rules={[{ required: true, message: "Please choose assistance!" }]}
          >
            <Radio.Group>
              <Radio.Button value={true}>Yes</Radio.Button>
              <Radio.Button value={false}>No</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Devil's Bargain"
            name="devil"
            rules={[
              { required: true, message: "Please choose devil's bargain!" },
            ]}
          >
            <Radio.Group>
              <Radio.Button value={true}>Yes</Radio.Button>
              <Radio.Button value={false}>No</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {diceData}
    </div>
  );
}

export default DiceForm;
