import { render } from "@testing-library/react";
import { Button, Card, Divider, InputNumber } from "antd";
import React, { useState } from "react";

function rollDie() {
  let min = Math.ceil(1);
  let max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}

function calculateRoll(rollData: any) {
  let numRolls = 2;
  if (rollData.assist == true) {
    numRolls++;
  }
  if (rollData.devil == true) {
    numRolls++;
  }
  return numRolls;
}

function rollDice(numRolls: any) {
  let newRolls: any = [];
  for (let i = 0; i < numRolls; i++) {
    let roll = rollDie();
    newRolls.push(roll);
  }
  return newRolls;
}

function calculateRollVal(rolls: []) {
  const high = Math.max(...rolls);
  let roll;
  const sixes = rolls.filter((roll: number) => roll == 6);
  console.log("sixes", sixes);
  if (sixes.length > 2) {
    roll = "Critical";
  } else roll = high;
  console.log("roll", roll);
  return roll;
}

function calculateOutcome(position: String, roll: any) {
  let outcome: string = "";
  console.log(position, roll);
  switch (position) {
    case "controlled":
      console.log("in controlled");
      switch (roll) {
        case "critical":
          outcome = "Critical Success: You do it with increased effect.";
          break;

        case 6:
          outcome = "You do it.";
          break;

        case 5:
          outcome =
            "YOu hesitate. Withdraw and try a different approach, or else do it with a minor consequence: a minor complication occurs, you have reduced effect, you suffer lesser harm, you end up in a risky position.";
          break;

        case 4:
          outcome =
            "YOu hesitate. Withdraw and try a different approach, or else do it with a minor consequence: a minor complication occurs, you have reduced effect, you suffer lesser harm, you end up in a risky position.";
          break;

        case 3:
          outcome =
            "You falter. Press on by seizing a risky opportunity, or withdraw and try a different approach.";
          break;

        case 2:
          outcome =
            "You falter. Press on by seizing a risky opportunity, or withdraw and try a different approach.";
          break;

        case 1:
          outcome =
            "You falter. Press on by seizing a risky opportunity, or withdraw and try a different approach.";
          break;

        default:
          break;
      }
      break;
    case "risky":
      switch (roll) {
        case "critical":
          outcome = "Critical Success: You do it with increased effect.";
          break;

        case 6:
          outcome = "You do it.";
          break;

        case 5:
          outcome =
            "You do it, but there is a consequence. You suffer harm, a complication occurs, you end up in a desperate position.";
          break;

        case 4:
          outcome =
            "You do it, but there is a consequence. You suffer harm, a complication occurs, you end up in a desperate position.";
          break;

        case 3:
          outcome =
            "Things go badly. You suffer harm, a complication occurs, you end up in a desperate position, you lose this opportunity.";
          break;

        case 2:
          outcome =
            "Things go badly. You suffer harm, a complication occurs, you end up in a desperate position, you lose this opportunity.";
          break;

        case 1:
          outcome =
            "Things go badly. You suffer harm, a complication occurs, you end up in a desperate position, you lose this opportunity.";
          break;

        default:
          break;
      }
      break;
    case "desperate":
      switch (roll) {
        case "critical":
          outcome = "Critical Success: You do it with increased effect.";
          break;

        case 6:
          outcome = "You do it.";
          break;

        case 5:
          outcome =
            "You do it, but there is a consequence. You suffer severe harm, a serious complication occurs, you have reduced effect.";
          break;

        case 4:
          outcome =
            "You do it, but there is a consequence. You suffer severe harm, a serious complication occurs, you have reduced effect.";
          break;

        case 3:
          outcome =
            "It is the worst outcome. You suffer severe harm, a serious complication occurs, you lose this opportunity for action.";
          break;

        case 2:
          outcome =
            "It is the worst outcome. You suffer severe harm, a serious complication occurs, you lose this opportunity for action.";
          break;

        case 1:
          outcome =
            "It is the worst outcome. You suffer severe harm, a serious complication occurs, you lose this opportunity for action.";
          break;

        default:
          break;
      }
      break;
    default:
    // code block
  }
  return outcome;
}

function assembleOutcome(rolls: [], rollData: any) {
  // determine if critical
  let roll = calculateRollVal(rolls);
  let outcome = calculateOutcome(rollData.position, roll);
  return outcome;
}

export default function DiceRoller(props: any) {
  let rolls = calculateRoll(props.rollData);
  let rollVals = rollDice(rolls);

  let outcome = assembleOutcome(rollVals, props.rollData);

  return (
    <div className="App">
      <Card title="Dice">
        <p>rolls a six sided dice x times.</p>
        <Divider />
        <div>{outcome}</div>
      </Card>
    </div>
  );
}
