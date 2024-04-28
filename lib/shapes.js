const fs = require('fs');
const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');

//make class shapes
 
class Shapes {
    
constructor(color, shape, message){
        this.color = color,
        this.shape = shape,
        this.message = message
    }
    createSVG() {
        let svgContent = '';

        let shapeObj;
        switch (this.shape) {
            case 'circle':
                shapeObj = new Circle(this.color);
                break;
            case 'square':
                shapeObj = new Square(this.color);
                break;
            case 'triangle':
                shapeObj = new Triangle(this.color);
                break;
            default:
                console.log('Invalid shape.');
                return;
        }
    const shapeAttributes = shapeObj.getShapeAttributes();

    const style = `fill:${this.color}`;
    const text = `<text x="50" y="60" font-family="Arial" font-size="20" fill="white" text-anchor="middle">${this.message}</text>`;

    svgContent += `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">`;
    svgContent += `<${this.shape} ${shapeAttributes} style="${this.color}" />`;
    svgContent += text;
    svgContent += `</svg>`;

    fs.writeFile(`${answers.shape}.svg`, svgContent), (err) =>
    err ? console.log(err) : console.log('Success!')
    }
}

module.exports = Shapes