#In the design of this game according to the README, what is the relationship 
#between a "player", an "agent", and a "snake"? (This is a question about the game design, 
#not about the current code.)
"""
So the player will make Ai code/bot code which is their own copy of the codebasem, which will be the 
program that designs the behavior of the snake, and how the snake works inside of the game. 
"""
#Describe all of the modifications that a player would need to make in the current codebase 
# in order to create a completely new agent and make it control a snake in the game.
"""
You would mainly be working in Agent.ts to define the behvior of a brand new ai player,
in this file you would have to decide the cCycle which is the pattern of the snake, 
when there isnt an apple near by it will run this cycle. Also maybe when its intialized 
because currently its only initialzed when its orange so add initalization for when its
other colors as well. Also I dont know if I am missunderstanding but I assume in the function
agent will move all the different agents move here so this is where each players program goes, 
as of now they all have set moves, or random moves this is the main part that will be changed.
Lastly you could change how random the movement is or how the try function, but those would
be how one would creates a new agent.
"""

#Describe all of the work that a referee would need to do in the current codebase in order 
#to take multiple players' copies of the codebase and run a competitive game. Assume the 
#referee is not able to communicate with the players before they all meet up for the competitive game,
#so the referee cannot ask the players to structure their modifications to the codebase in 
#any specific way.
"""
I believe that in the current code base a referee would need to mainly or only be in agent.ts
and in that file they would need to have different cCycles for every player that wanted to make
their own moving patterns and inmport them in along with any other functions as long as they 
dont break the rules of the game. After that its just putting each player as a different 
letter/color so all of 'A's code would be in agentmove but in the 'A' case sectition and the same 
would go for players 'B,C, and D'. Also to go into a little more detail the extra functions that
each agent might have that was created by their player would have to be added in the same way 
that it was written in that players code base copy.
"""
#Describe three meaningfully different concepts for agents that a player should be able to 
#implement in this game. None of the concepts you describe should be similar to any of the 
#four example agents in the current codebase. Your agents don't have to be good at winning, 
#and you don't have to explain exactly how the algorithm would be implemented, just what the 
#behavior of the agent would be. Make sure that the concepts you describe do not involve 
#cheating and do not require any modification to the rules of the game as defined in the 
#README. For example, a player should be able to implement an agent that uses a private 
#array to remember every cell it's taken, so that it can use its "memory" data to avoid 
#running into itself while moving around the grid semi-randomly.
"""
1. Think one would a survival type of algorithm so it would try to reach the outter bounds as quickly
possible and close off its area, knowing how big the area is as a player I would say to find the 
edge of the game screen and just go along it in one direction and avoid all other agents 
than when half way accross turn and go towars the middle and lastly come back to the start point, all 
while avoiding other agents. At this point the agent would be closed off in its own 1/4th of the screen
now it would just slowly fill in the space in its cage minusing the x and y that it would have to go
after every time around taking as much time as possible to be alive. In this implementation it doesnt 
look like theres a limit to the amount of apples so eventually there will be apples apearing in the cage.

2.Secondly be a troll, notice in the 5x5 around you where the edge is and run to the middle of the screen 
and try to take as much space as possible of others square so have a if statement depending on which 
cornor you came from and avoid that side, take it out of the randome equation that direction
and basically be random to eventually others will run into your taken spots because you have 
a little bit of everyons in the middle.

3.Lastly, explore the board by moving in a coil or helix, or stair case, moving in a set pattern away
from their starting point wrapping some edges and basically moving in one direction and avoiding players 
while looking for apples and going straight towards them, and always moving away from players, if moved 
a set amount and players still in 5x5 vision ignore them and look for apples.

because one sounds similar now that I ran the game
4.This one can be very basic all it does is takes the length of a side and goes up a 1/4th of the height
than goes away from the starting point by a 4th of the length over and over, main;y trying to get to the 
other side/corner the farthest away from itself.

"""



"totally refactor gamerunner programmer about which one lost"