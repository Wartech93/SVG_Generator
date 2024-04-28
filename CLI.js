
const inquirer = require('inquirer')
const fs = require('fs')
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
                    //asks for a color to be used
                    type: "input",
                    message: "Enter a color keyword:",
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
            .then((answers) => {
                const Shapes = new Shapes(answers.shape, answers.color, answers.characters.slice(0, 3));
                Shapes.createSVG();;
             })
                .catch((err) => {
                    console.log(err);
                 })              
            }
        }
 
module.exports = CLI