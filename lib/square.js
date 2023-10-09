import { Shape } from './shapes.js'

export class Square extends Shape {
    constructor() {
        super()
    }

    setColor(color) {
        this.color = color
    }
    setText(text, textColor) {
        this.text = text
        this.textColor = textColor
    }
    render() {
        return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`
      }
}