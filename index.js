import inquirer from "inquirer"
import { questions } from "./utils/questions.js"
import { Circle } from "./lib/circle.js"
import { Square } from "./lib/square.js"
import { Triangle } from "./lib/triangle.js"
import { generateLogo } from "./utils/generateLogo.js"

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
      console.log(logoSVG)
      
    })
    .catch((error) => {
      console.error(error)
    })
}

init()