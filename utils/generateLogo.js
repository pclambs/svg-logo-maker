export function generateLogo(shapeProperties, textProperties) {
    const { shapeColor, shapeSVG } = shapeProperties
    const { text, textColor } = textProperties

    const svgTemplate = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSVG}
        <text x="150" y="115" font-size="48" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `
  
    return svgTemplate
  }