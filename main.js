#! /usr/bin/env node
import inquirer from 'inquirer';
const student = await inquirer.prompt([
    {
        name: "UserName",
        type: "input",
        message: "What is your name?"
    },
    {
        name: "age",
        type: "number",
        message: "What is your age?"
    },
    {
        name: "Qualification",
        type: "list",
        choices: ["Matric", "Inter", "Bachelors", "Masters"],
        message: "What is your qualification?",
    },
    {
        name: "City",
        type: "rawlist",
        choices: ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"],
        message: "What is your city name?"
    },
    {
        name: "language",
        type: "checkbox",
        choices: ["HTML", "CSS", "JavaScript", "TypeSCript", "Python"],
        message: "How many languaes you learn?"
    },
    {
        name: "pass",
        type: "password",
        message: "Enter your password!"
    },
    {
        name: "student",
        type: "confirm",
        message: "Are you a student?",
        default: false
    },
]);
console.log(student);
