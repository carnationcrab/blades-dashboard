import { Button, Card, InputNumber } from "antd";
import React from "react";

let diceRollNumber = 4;

function rollDie() {
  let min = Math.ceil(1);
  let max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}

function onChange(value: any) {
  diceRollNumber = value;
  console.log(diceRollNumber);
}

function getRolls(times: number) {
  let rolls = [];

  for (let i = 0; i < times; i++) {
    let roll = rollDie();
    rolls.push(roll);
  }

  console.log(rolls);

  return rolls;
}

export default function DiceRoller() {
  return (
    <div className="App">
      <Card title="Dice">
        <p>rolls a six sided dice.</p>
        <InputNumber
          min={1}
          max={6}
          defaultValue={diceRollNumber}
          onChange={onChange}
        />{" "}
        <Button type="primary" onClick={() => getRolls(diceRollNumber)}>
          Roll
        </Button>
      </Card>
    </div>
  );
}
