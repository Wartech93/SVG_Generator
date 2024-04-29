
const inquirer = require('inquirer')
const Shapes = require('./lib/shapes.js');


const shapeChoices = ["circle", "triangle", "square"];

class CLI {
    run() {
        return inquirer
            //lists question to ask user
            .prompt([
                {
                    //prompts users and asks for 3 characters to add to svg that is being created
                    type: "input",
                    message: "Enter up to 3 characters of text for your image:",
                    name: "message",
                    validate: function (input) {
                        if (input.length <= 3) {
                            return true;
                        } else {
                            return 'Please enter up to three characters';
                        }
                    }
                },
                {
                    //asks for a color to be used for text
                    type: "input",
                    message: "Enter a color keyword for your text color:",
                    name: "textColor"
                },
                {
                    //asks for a color to be used for shape
                    type: "input",
                    message: "Enter a color keyword for your shape:",
                    name: "color"
                },
                {
                    //select a list of shapes from shapechoices
                    type: "list",
                    message: "Select a shape you'd like to use",
                    name: "shape",
                    choices: shapeChoices
                }
            ])
            .then(answers => {

                const message = answers.message ? answers.message.slice(0, 3) : '';
                const shapes = new Shapes(answers.shape, answers.color, message, answers.textColor);
                return shapes.createSVG();
             })
             .then(() => {
                console.log("SVG file created successfully.");
             })
                .catch(err => {
                    console.log("Error", err);
                 });        
            }
        }
 
module.exports = CLI