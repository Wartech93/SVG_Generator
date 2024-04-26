const fs = require('fs');
// const { text } = require('stream/consumers');
const CLI = require('./lib/CLI.js');
//make class shapes
 
class CLI {
    
constructor(color, shape, message){
        this.color = color,
        this.shape = shape,
        this.message = message
    }
    createSVG() {
        let svgContent = '';

        let shapeAttributes = '';
        switch (this.shape) {
            case 'circle':
            shapeAttributes = 'cx="50" cy="50" r="40"';
            break;
            case 'triangle':
            shapeAttributes = 'points ="50,10 90,90 10,90"';
            break;
            case 'square':
            shapeAttributes = 'x="10" y="10" width="80" height="80"'
            break;
            default:
                console.log('Invalid shape.');
                return;
        }
    const style = `fill:${this.color}`;
    const text = `<text x="50" y="60" font-family="Arial" font-size="20" fill="white" text-anchor="middle">${this.message}</text>`;

    svgContent += `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">`;
    svgContent += `<${this.shape} ${shapeAttributes} style="${style}" />`;
    svgContent += text;
    svgContent += `</svg>`;

    fs.writeFile(`${answers.shape}.svg`, svgContent), (err) =>
    err ? console.log(err) : console.log('Success!')
    }
}

module.exports = CLI