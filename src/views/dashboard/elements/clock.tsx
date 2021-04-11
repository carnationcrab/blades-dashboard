import { Button, Card } from "antd";
import { VictoryPie } from "victory";
import { CloseOutlined } from "@ant-design/icons";

import React, { useState } from "react";

export default function Clock(props: any) {
  const [deleted, setDeleted] = useState(false);
  console.log(props.slices);

  let pieData = [];
  let sliceY = 100 / props.slices;
  for (let i = 0; i < props.slices; i++) {
    const newSlice = { x: i + 1, y: sliceY };
    pieData.push(newSlice);
  }

  return (
    <div className="App">
      {deleted == false ? (
        <Card
          title="Progress Clock"
          extra={
            <Button
              type="text"
              shape="circle"
              icon={<CloseOutlined />}
              onClick={() => {
                setDeleted(true);
              }}
            />
          }
        >
          <VictoryPie data={pieData} />
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
}
