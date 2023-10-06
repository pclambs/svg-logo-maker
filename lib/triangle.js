import { Shape } from './shapes.js'

export class Triangle extends Shape {
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
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}