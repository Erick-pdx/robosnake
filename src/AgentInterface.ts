import { ScreenPart } from "./GameRunner";
import { Motion } from "./Agent";

export interface Agent {
  initialize(): void;
  move(screenPart: ScreenPart): Motion;
}
