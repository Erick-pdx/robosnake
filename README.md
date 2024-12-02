### Players

As a player you can create your agent that controls yours snake in any of the Agent'?'.ts files of
your choosing in these files which are all the same, you have the options of using and editing some of the basic movement code. You may change the pattern, use random movement, or set up scenarios in thse files that your snake will do as long as it follows the rules of the game.

To reiterate:

1. Players will be given one of 4 files (AgentA, AgentB, AgentC, AgentD)
2. To be helpful there is generic movement code in each file that can be edited
3. And lastly, in that file a player can create their own code for the movement of the snake

### Referee

As a referee if allowed you may overlook the code of the players to make sure the agents code does not break the rules of the game, however for the most part you will working in GameRunner.ts where you can assign the agents to any snake in the game. This is mainly done by changing what the letter is intialized to in terms of the function it will use which is tied to each individual file the players have their agent code. Lastly when it is all said in done you

To reiterate:

1. If given permission you may overlook the players files (AgentA, AgentB, AgentC, AgentD) for cheating
2. Assign each agent to a corner by editing the Gamerunner.ts file, you are able to dublicate by calling the agents function again in another spot.
3. lastly when the game is ready to start, save all edits, run "npm run clear" in the terminal, and finally run "npm run build", and drag the built html into a browser and start the game.
