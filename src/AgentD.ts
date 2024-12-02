import { Agent } from "./AgentInterface";
import { ScreenPart } from "./GameRunner";
import { Motion } from "./Agent";
import { randomMotion } from "./Agent";

export class AgentD implements Agent {
  public initialize(): void {}

  move(screenPart: ScreenPart): Motion {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (screenPart[j][i] == "apple") {
          if (i > 3) return "right";
          else if (i < 3) return "left";
          else if (j > 3) return "down";
          else if (j < 3) return "up";
        }
      }
    }
    return randomMotion(screenPart);
  }
}
