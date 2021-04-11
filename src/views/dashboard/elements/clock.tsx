import { Card } from "antd";
import { VictoryPie } from "victory";

import React from "react";

export default function Clock(props: any) {
  console.log(props.slices);
  let pieData = [];
  let sliceY = 100 / props.slices;
  for (let i = 0; i < props.slices; i++) {
    const newSlice = { x: i + 1, y: sliceY };
    pieData.push(newSlice);
  }

  return (
    <div className="App">
      <Card title="Progress Clock">
        <VictoryPie data={pieData} />
      </Card>
    </div>
  );
}
