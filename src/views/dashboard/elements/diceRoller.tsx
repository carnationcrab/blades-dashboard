import { render } from "@testing-library/react";
import { Button, Card, InputNumber } from "antd";
import React, { useState } from "react";

function rollDie() {
  let min = Math.ceil(1);
  let max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function DiceRoller() {
  const [rolls, setRolls] = useState([0, ""]);
  const [rollCount, setRollCount] = useState(1);

  return (
    <div className="App">
      <Card title="Dice">
        <Card>
          <p>rolls a six sided dice x times.</p>
          <InputNumber
            min={1}
            max={6}
            defaultValue={rollCount}
            onChange={(value) => setRollCount(value)}
          />{" "}
          <Button
            type="primary"
            onClick={() => {
              let newRolls = [];
              for (let i = 0; i < rollCount; i++) {
                let roll = rollDie();
                newRolls.push(roll, " ");
              }
              setRolls(newRolls);
            }}
          >
            Roll
          </Button>
        </Card>
        <Card> Rolls: {rolls}</Card>
      </Card>
    </div>
  );
}
