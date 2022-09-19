# Calculator-Project

Our final project is going to combine everything you’ve learned so far: you’re going to make an on-screen calculator using JavaScript, HTML, and CSS.

Assignment

Here are some use cases (abilities your project needs to have):

Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators: add, subtract, multiply, divide.

Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.

There should also be a display for the calculator.

Add a “clear” button.

Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7- 5 * 3 = should yield 42. 

Your calculator should not evaluate more than a single pair of numbers at a time.

You should round answers with long decimals so that they don’t overflow the screen.

Pressing = before entering all of the numbers or an operator could cause problems!

Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”

Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

Extra Credit

Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.

Add a “backspace” button, so the user can undo if they click the wrong number.

Add keyboard support!
