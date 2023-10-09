import inquirer from "inquirer"
import { questions } from "./utils/questions.js"
import { Circle } from "./lib/circle.js"
import { Square } from "./lib/square.js"
import { Triangle } from "./lib/triangle.js"
import { generateLogo } from "./utils/generateLogo.js"
import { writeFile } from "fs/promises"

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
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
      shape.setColor(answers.shapeColorChoice)
      shape.setText(answers.textChoice, answers.textColorChoice)

      const shapeSVG = shape.render()

      const logoSVG = generateLogo(
        { shapeColor: shape.color, shapeSVG },
        { text: answers.textChoice, textColor: answers.textColorChoice }
      )
      return writeFile("./examples/logo.svg", logoSVG)
    })
    .then(() => {
        console.log("SVG logo saved as logo.svg")
      })
    .catch((error) => {
      console.error(error)
    })
}

init()