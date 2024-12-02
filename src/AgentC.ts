import { Agent } from "./AgentInterface";
import { ScreenPart } from "./GameRunner";
import { Motion } from "./Agent";
import { randomMotion } from "./Agent";

const cCycle: Motion[] = ["up", "up", "right", "down", "right"];
let cIndex: number = 0;

export class AgentC implements Agent {
  public initialize(): void {
    cIndex = 0;
  }

  move(screenPart: ScreenPart): Motion {
    const c: Motion = cCycle[cIndex];
    cIndex++;
    cIndex = cIndex % cCycle.length;
    return c;
  }
}
