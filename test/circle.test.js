import { Circle } from "../lib/circle.js"

describe("Circle Class", () => {
  it("should set the color property correctly", () => {
    const circle = new Circle()
    circle.setColor("blue")
    expect(circle.color).toBe("blue")
  })

  it("should render the correct SVG for the circle shape", () => {
    const circle = new Circle()
    circle.setColor("green")
    const svg = circle.render()
    expect(svg).toEqual('<circle cx="150" cy="115" r="80" fill="green" />')
  })
})