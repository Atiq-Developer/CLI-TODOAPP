import inquirer from "inquirer";

let tasks: any[] = [];
let condition: boolean = true;
while (condition) {
  let answer = await inquirer.prompt([
    {
      message: "What you want to do add more sports in your todolist?",
      type: "input",
      name: "addTodos",
    },

    {
      message: "Do you want to add more todo?",
      type: "confirm",
      name: "addMoreTodos",
      default: "false",
    },
  ]);
  tasks.push(answer.addTodos);
  condition = answer.addMoreTodos;
  console.log(tasks);
}
