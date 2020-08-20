P5 lecture notes 

Intro

The goal is to explain the basics of the P5 library: 
Basic functionality 
Functions
Uploading images 
Making animations 
Creating events based on mouse click/key press etc 

Structure

Set up 
Create an index.html
Navigate to the P5 website/documentation -> get started page 
Use the CDN link in the head of the HTML 
Create a Main.js 
Console.log in the Main.js to check it’s working 
Add the script src to end of the body 
Explain why this is important(so the HTML renders before the script… DOM manipulation) 
Open Live Server, check the console, console.log is working 

3 main functions (FROM P5… We’re not creating these)
Preload, setup + draw 
console.log() in each just to see it work 
Explain what each is doing and the order it happens in
Set up definition: The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. 
The order they’re in is important 

Create a game.js file
Add a game class
Import it in the index.html before the main.js
Add X + Y elements to the game.js to the constructor. The constructor sets the basic elements to the class whenever it’s called. Things can be passed in as arguments 

Import the game.js in the main.js (const game = new Game())

Create a method in the game.js and call it in the main.js to prove it works 

Create a canvas in the setup function 

 

Create a rectangle in the DRAWINGGAME method from the game.js
Give it a fill 
Switch the draw co-ordinates from the method to calling the x,y values from the class
Add the this.x++ to show the movement
Once they see it’s drawing too many times add the clear() and explain what it does


Keypressed 
Add this to the main.js because it’s a p5 function. 
Add and if statement +  a console logso the students get what is going on: 
 if (keyCode) {
    console.log("this "keyCode);
  }

console.log(keycode === uparrow) to show the arrow working 
Then add the else if for each keycode so they can show the arrows working 
Add a console.log to the function os they can see the game.x is in the main.js
Then add the movement
