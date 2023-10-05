// inquirer questions
export const questions = [
    {
        type: "list",
        name: "shapeChoice",
        message: "Choose a shape for your logo background",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColorChoice",
        message: "Input a color for your logo background"
    },
    {
        type: "input",
        name: "textChoice",
        message: "Input logo text (Up to 3 characters)",
        validate: (answer) => {
            if (answer.length > 3) {
                return "A logo must have no more than 3 characters."
            }
            return true;
        },
    },
    {
        type: "input",
        name: "textColorChoice",
        message: "Input a color for the logo text"
    },
]