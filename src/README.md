---
title: Are You a True Lakers Fan?
---

# Show next questions if Player don't answer within 3 seconds (count as a loss)
# After 5th questions, show the result and ask for a re-play
# Questions are appropriately unfair and biased, thank you


# To Do
0. Github - Uploading both projects in a single repository

1. Needs to reset the timer if User submits an answer
    - There is a delay right now 
   After last question is passed, "Time Remiaining..." is also delayed to disappear
   ? Maybe combine setInterval() and displayQuestions()? 

2. Add a Start button before displaying questions. Above that button, display the rule of the game
3. Formatting (Radio buttons looks weird due to different length sizes)
    - Remove the Radio button and make the whole text/div clickable 
    - For questions, use a background color than for answers
4. saveWinners() 
    - Keep only 20 winners 
    - Save the winner to winners.json file


# Done 
+ Update randomNumbers() to avoid duplicates
    => Done
+ Finsih onSubmit() function thing
    => Done
+ Add more questions (At least 20)
+ Add a way to shuffle answers and keep track of correct answers
+. Implement 3 seconds rule
    => Done but needs to clean up the code
    => Increase to 5 seconds since some questions are long  


# Questions
1. What happens if I leave out 'value' attribute in 'input' tag?
    => Doesn't matter for me due to using use of .innerHTML 
2. Difference between getElementById vs getElementsByName
    = Node vs Element
3. innerHTML vs innerText



foo();
setInterval(foo, delay);

---OR 

function foo() {
   // do stuff
   // ...

   // and schedule a repeat
   setTimeout(foo, delay);
}

// start the cycle
foo();