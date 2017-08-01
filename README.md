# Project #1: Space Fighter Game
Presentation: https://docs.google.com/presentation/d/1ODmVbYv8tACMh2rhos7EqqTKq10rpSGXC9sr5sV2YJo/edit#slide=id.g1f4cdf2e5e_0_246

### Deliverables

* **Technologies Used**
  - When the project first began last week I used jQuery for reading some of the first game elements and also to test out, without success, the animation for projecting the laser beam. Given the unfamiliarity, I soon abandoned it and went back to the more versed syntax of plain JavaScript. So in the end, HTML, CSS, and JavaScript are the programming languages used in completing this game. I had also used Google Chrome's developer tools frequently throughout the programming stages and found it immensely helpful.
* **Approach Taken**
  - A lot of different approaches were attempted and failed but to narrow it down I'll mention only the key ones. First of all, I had to pivot away from the original game concept which was meant to have multiple rounds of gameplay. The reason being simply that my lack of knowledge/experience in programming in the web browser environment limited my ability to execute. So then I focused on building out elements and connecting event listeners to get just one round of gameplay going. And that eventually occupied all of my time. In terms of process, the basic html elements were created first. Followed by JavaScript for putting together all the gameplay functionalities. Style came last once all the other pieces were in place.
* **User Stories**
  - The game is set in outer-space. The player controls a spaceship that can fire laser beams. There's alien invader appearing in front of the ship that will need to be destroyed by firing the laser beam. The gamer controls a spacecraft. One alien invader target will appear at a random lane and randomly hop to another. The gamer will navigate the five lanes to align with target. Then fires off laser beam.
* **Wireframes**
  - https://wireframe.cc/vA1vjr
* **How-to-use instructions**
  - Once the game loads in browser, press "Start" button to begin the game.
  - Press "Left/Right" keys to move the spaceship. Only five spaces are available to occupy.
  - At the same time the alien invader will appear and randomly jump horizontally.
  - The gamer has to catch the alien invader by aligning it with the spaceship. Soon as this happens, press "Space" key to fire laser beam.
  - An animation will appear indicating the alien invader was destroyed.
  - A timer is available displaying the speed at which the game was completed.
  - Refresh the page to start the game again.
* **Unsolved Problems**
  - When the player loses (by missing the target), an alert message appears. But it continues to appear when you click okay on the message box. I could not figure out a way to make it disappear. Unless using the refresh page button.
  - I never got around to making the game have multiple rounds per play. It will probably require a loop of some sort but I have not been successful at implemented a loop with DOM manipulation.
