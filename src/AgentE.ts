import { Agent } from "./AgentInterface";
import { ScreenPart } from "./GameRunner";
import { Motion } from "./Agent";
import { randomMotion } from "./Agent";

export class AgentE implements Agent {
  private moveRight: boolean = false;

  public initialize(): void {
    this.moveRight = true;
  }

  move(screenPart: ScreenPart): Motion {
    if (this.moveRight) {
      this.moveRight = false;
      return "right";
    } else {
      this.moveRight = true;
      return "down";
    }
  }
}
