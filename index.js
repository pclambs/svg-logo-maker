import inquirer from "inquirer"
import { questions } from "./utils/questions.js"

// start with inquirer prompts
function init() {
    inquirer.prompt(questions)
    .then((answers =>
        console.log(answers)
    ))
    .catch((error) => {
        console.log(error)
    })
}

// init app
init()