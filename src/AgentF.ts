import { Agent } from "./AgentInterface";
import { ScreenPart } from "./GameRunner";
import { Motion } from "./Agent";
import { randomMotion } from "./Agent";

const fCycle: Motion[] = [
  "right",
  "right",
  "right",
  "right",
  "right",
  "right",
  "right",
  "right",
  "right",
  "right",
  "down",
  "down",
  "down",
  "down",
  "down",
  "down",
  "down",
  "down",
  "down",
  "down",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "up",
  "up",
  "up",
  "up",
  "up",
  "up",
  "up",
  "up",
  "up",
  "up",
];
let fIndex: number = 0;

export class AgentF implements Agent {
  public initialize(): void {
    fIndex = 0;
  }

  move(screenPart: ScreenPart): Motion {
    const f: Motion = fCycle[fIndex];
    fIndex++;
    fIndex = fIndex % fCycle.length;
    return f;
  }
}
