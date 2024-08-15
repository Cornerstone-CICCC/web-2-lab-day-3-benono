[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/0emH6ROf)
# Web 2 - Lab Day (GSAP Scrolling Portfolio)

**Objective:** Recreate the demo video as much as possible by using the GreenSock Animation Platform (GSAP) methods and properties.

**Demo:** [https://drive.google.com/file/d/1_VVTfki2ZqGlnbP0JraFnIyg4dKUwPPS/view?usp=sharing]

## Instructions

1. Clone the repository to your local machine.
2. Using GSAP, recreate the demo video by modifying the `app.js` file. Do not modify the HTML and CSS files. You can only edit the JavaScript file.
3. Watch the video carefully for the timing and the type of animation.
4. Commit and push your changes once you are done.

## Notes

- Only the `.horizontal-sections` and `.section5` triggers use the `scrub` and `pin` properties.
- Sections 1, 2, 3, and 4 animations uses `duration` and are not tied to the scroll bar.
- Use `xPercent` to move the sections inside `.horizontal-sections`.
- On `.section5`, break "Contact Me" into individual characters so that you can use stagger.
- For the reverse animation when scrolling up, use `toggleActions` for sections 2, 3, and 4.
- Keep an eye on the scroll bar.
