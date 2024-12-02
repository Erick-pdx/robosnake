import { Agent } from "./AgentInterface";
import { ScreenPart } from "./GameRunner";
import { Motion } from "./Agent";
import { randomMotion } from "./Agent";

export class AgentB implements Agent {
  public initialize(): void {}

  move(screenPart: ScreenPart): Motion {
    return randomMotion(screenPart);
  }
}
