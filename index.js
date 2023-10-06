import inquirer from "inquirer"
import { questions } from "./utils/questions.js"
import { Circle } from "./lib/circle.js"
import { Square } from "./lib/square.js"
import { Triangle } from "./lib/triangle.js"

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Create an instance of the selected shape class
      let shape
      switch (answers.shapeChoice.toLowerCase()) {
        case "circle":
          shape = new Circle()
          break
        case "square":
          shape = new Square()
          break
        case "triangle":
          shape = new Triangle()
          break
        default:
          console.error("Invalid shape choice.")
          return
      }

      // Set color of the shape
      shape.setColor(answers.shapeColorChoice)

      // Set the text and text color
      shape.setText(answers.textChoice, answers.textColorChoice)

      // Render the SVG and log it
      const svg = shape.render()
      console.log(svg)
    })
    .catch((error) => {
      console.error(error)
    })
}

// init app
init()