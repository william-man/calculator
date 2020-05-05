## Project Description

This project is a basic calculator created using jQuery for its functions.

To view a demo: [Link](https://wman27.github.io/Calculator-demo/)  

### Briefing

The requirements this project must satisfy are:

1. The calculator must have 10 clickable elements, one for each of the numbers 0-9.
2. It must contain 4 clickable elements, one for each primary operator (add, subtract, multiply, divide).
3. It must contain a clickable element for the decimal point (.) and clear.
4. The display defaults at 0, inputs must be shown when clicked and the correct result must be shown when = is clicked.

### Challenges

Although the idea of the project was to simply replicate a basic calculator, a major challenge I came across was:

-The primary functions does not work as intended when it is transformed into a string and cannot be transformed back into an operator.

To solve this issue, I used a function to assign the clicked operator to a variable and then a switch statement to check and apply the operator to the inputted values.

Below is a snippet of the solution:

        function calculateValue() {
        switch(operator) {
            case "+":
                outputValue = +inputValue1 + +inputValue2;
                break;
            case "-":
                outputValue = +inputValue1 - +inputValue2;
                
                break;
            case "*":
                outputValue = +inputValue1 * +inputValue2;
                break;
            case "/":
                outputValue = +inputValue1 / +inputValue2;
                break;
        }
