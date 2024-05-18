#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
let condition = true;
while (condition) {
    let TodoQuestion = await inquirer.prompt([
        {
            name: "Question1",
            type: "input",
            message: "What would you like to Add in your TodoList:",
        },
        {
            name: "Question2",
            type: "confirm",
            message: "Would you Like to Add more in TodoList?",
            default: true,
        },
    ]);
    // Check if the input is not an empty string
    if (TodoQuestion.Question1.trim() !== "") {
        tasks.push(TodoQuestion.Question1.trim());
    }
    else {
        console.log("Task cannot be empty. Please enter a valid task.");
    }
    console.log(tasks);
    condition = TodoQuestion.Question2;
}
