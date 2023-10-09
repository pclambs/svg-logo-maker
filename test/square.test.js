import { Square } from "../lib/square.js"

describe("Square Class", () => {
  it("should set the color property correctly", () => {
    const square = new Square()
    square.setColor("red")
    expect(square.color).toBe("red")
  })

  it("should render the correct SVG for the square shape", () => {
    const square = new Square()
    square.setColor("yellow")
    const svg = square.render()
    expect(svg).toEqual('<rect x="75" y="50" width="150" height="150" fill="yellow" />')
  })
})