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
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
      }
}