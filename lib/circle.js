import { Shape } from './shapes.js'

export class Circle extends Shape {
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
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`
      }
}