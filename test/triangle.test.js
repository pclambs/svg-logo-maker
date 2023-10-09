import { Triangle } from "../lib/triangle.js"

describe("Triangle Class", () => {
  it("should set the color property correctly", () => {
    const triangle = new Triangle()
    triangle.setColor("purple")
    expect(triangle.color).toBe("purple")
  })

  it("should render the correct SVG for the triangle shape", () => {
    const triangle = new Triangle()
    triangle.setColor("orange")
    const svg = triangle.render()
    expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange" />')
  })
})