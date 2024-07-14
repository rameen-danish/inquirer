import inquirer from "inquirer";
const pizzaOrder = await inquirer.prompt([
    {
        name: "location",
        type: "input",
        message: "Enter your location"
    },
    {
        name: "order",
        type: "number",
        message: "How many pizza do you order?"
    },
    {
        name: "flavour",
        type: "list",
        choices: ["Tikka", "Afghani", "Cheesy", "Vegetable", "Fajita"],
        message: "Please select Pizza flavour"
    },
    {
        name: "crust",
        type: "rawlist",
        choices: ["Thin crust", "Thick crust", "stuffed crust"],
        message: "Choose your pizza crust"
    },
    {
        name: "toping",
        type: "checkbox",
        choices: ["More Cheese", "Olives", "Mushrooms", "Onion", "Tomatoes", "Fresh cream"],
        message: "Select topings for your pizza"
    },
    {
        name: "orderConfirm",
        type: "confirm",
        message: "Confirm your order",
        default: true
    },
    {
        name: "OrderNumber",
        type: "password",
        message: "Enter your order number"
    }
]);
console.log(pizzaOrder);
