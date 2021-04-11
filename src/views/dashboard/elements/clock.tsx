import { Button, Card } from "antd";
import { VictoryPie } from "victory";
import { CloseOutlined } from "@ant-design/icons";

import React, { useState } from "react";

export default function Clock(props: any) {
  const [deleted, setDeleted] = useState(false);
  console.log(props.slices);

  let colors = ["grey", "grey", "grey", "grey", "grey", "grey"];

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
          title={props.name}
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
          <VictoryPie
            data={pieData}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "white",
                fill: "grey",
                strokeWidth: 3,
              },
              labels: {
                fill: "white",
              },
            }}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: "data",
                        mutation: ({ style }) => {
                          return style.fill === "black"
                            ? null
                            : { style: { fill: "black" } };
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </Card>
      ) : (
        <span></span>
      )}
    </div>
  );
}
