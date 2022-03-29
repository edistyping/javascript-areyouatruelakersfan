---
title: Are You a True Lakers Fan?
---

Link: https://edistyping.github.io/javascript-areyouatruelakersfan/

# Questions are maybe unfair but not rigged. 
![Screenshot 1](https://raw.githubusercontent.com/edistyping/javascript-areyouatruelakersfan/master/Screenshots/1.JPG)

# To Do (Updated: 3/28/2022)
1. Formatting looks horrible on Mobile. Fix it
    - Displaying Answers box
    - After a question is answered, the selected button is has formatting applid. Reset this 


# Finished 
+ Update randomNumbers() to avoid duplicates
    => Done
+ Finsih onSubmit() function thing
    => Done
+ Add more questions (At least 20)
+ Add a way to shuffle answers and keep track of correct answers
+ Implement 3 seconds rule
    => Done but needs to clean up the code
    => Increase to 5 seconds since some questions are long  
+ Needs to reset the timer if User submits an answer
    - There is a delay right now 
   After last question is passed, "Time Remiaining..." is also delayed to disappear
   ? Maybe combine setInterval() and displayQuestions()? 
+ Formatting (Radio buttons looks weird due to different length sizes)
    - Remove the Radio button and make the whole text/div clickable 
    - For questions, use a background color than for answers
+ Add a Start button before displaying questions. Above that button, display the rule of the game


# Questions
1. What happens if I leave out 'value' attribute in 'input' tag?
    = Doesn't matter for me due to using use of .innerHTML 
2. Difference between getElementById vs getElementsByName
    = Essentially comes down to Node vs Element (Note: Element is part of node)
3. innerText vs innerHTML
    = Simply returning contents as plain texts vs HTML format

