import { MaybeCell, ScreenPart } from "./GameRunner";

export type Player = "A" | "B" | "C" | "D";

export type Motion = "up" | "down" | "left" | "right";

// C uses these moves in order, repeatedly
const cCycle: Motion[] = ["up", "up", "right", "down", "right"];
let cIndex: number = 0;

export function initializeAgent(player: Player): void {
  // only agent C has its own state (for now)
  if (player == "C") cIndex = 0;
}

export function randomMotion(part: ScreenPart): Motion {
  const rnd: number = Math.random() * 4; // random float in the half-open range [0, 4)

  let x: Motion;
  if (rnd < 1) x = "up";
  else if (rnd < 2) x = "down";
  else if (rnd < 3) x = "left";
  else x = "right";

  // try not to hit anything
  if (tryMove(x, part) != "apple" && tryMove(x, part) != "empty") {
    switch (x) {
      case "up":
        return "down";
      case "right":
        return "left";
      case "down":
        return "up";
      case "left":
        return "right";
    }
  }

  return x;
}

function tryMove(m: Motion, p: ScreenPart): MaybeCell {
  // the snake is positioned in the center at p[2][2]
  switch (m) {
    case "left":
      return p[2][1];
    case "right":
      return p[2][3];
    case "up":
      return p[1][2];
    case "down":
      return p[3][2];
  }
}
