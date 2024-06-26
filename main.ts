#! /usr/bin/env node
import inquirer from 'inquirer'
const student = await inquirer.prompt([
    {   //type "input" is used for string data like name, email etc
        name:"UserName",                           
        type:"input",
        message:"What is your name?"
    },
    {   //type "number" is used for numeric values
        name:"age",                              
        type:"number",
        message:"What is your age?"
    },
    {   //type "List"  displays a list of options for the user to choose from
        name:"Qualification",                    
        type:"list",
        choices:["Matric","Inter","Bachelors","Masters"],
        message:"What is your qualification?",
    },
    {   //type "rawlist" is also displays the list of options for the user to choose from or by its numbering
        name:"City",
        type:"rawlist",
        choices:["Karachi","Lahore","Islamabad","Peshawar","Quetta"],
        message:"What is your city name?"
    },
    {   //type "Checkbox" allows the user to choose multiple options from the list
        name:"language",
        type:"checkbox",
        choices:["HTML","CSS","JavaScript","TypeSCript","Python"],
        message:"How many languaes you learn?"
    },
    {   //type "password" prompts user to enter password with hidden characters
        name:"pass",
        type:"password",
        message:"Enter your password!"
    },
    {   //type "confirm" presents a yes/no question and answer present in boolean value true/false
        name:"student",
        type:"confirm",
        message:"Are you a student?",
        default:false
    },
])
console.log(student);
