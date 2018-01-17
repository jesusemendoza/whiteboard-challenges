#Problem Domain
You're the junior conductor on a commuter train, and have been asked by the senior conductor to do a head count of passengers on the train.

Write a function const traverse = (engine) => {... which takes the engine as a starting location. Travel from the engine to the caboose, and console.log the number of passengers in each car as your progress. Each car, including the engine will have the following signature: js { <engine> value: 2, next: { <next car> value: 16, next: { <next car> } }

#Documentation
Module
solution.numPass(car)
    -goes down an object counting the value for each object
    -tests for values that are strings instead of intergers
    -tests to make sure the argument entered is an object
    -tests to make sure that there is an arguement entered
    -tests to make sure that the correct output is received from a sample object