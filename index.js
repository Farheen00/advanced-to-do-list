#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let options = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "Choose your option",
            choices: ["Add", "View", "Remove"]
        }
    ]);
    if (options.option == "Add") {
        let addTodo = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: "Add your todo"
            }
        ]);
        todos.push(addTodo.add);
        console.log(todos);
    }
    if (options.option == "View") {
        console.log("TODO LIST:");
        console.log(todos);
    }
    if (options.option == "Remove") {
        let deleteTodo = await inquirer.prompt([
            {
                name: "delete",
                type: "list",
                message: "Choose to delete",
                choices: todos.map((item) => item)
            }
        ]);
        let todos2 = todos.filter(item => item !== deleteTodo.delete);
        todos = todos2;
        console.log(todos);
    }
    let cont = await inquirer.prompt([
        {
            name: "con",
            type: "confirm",
            message: "Do you want to continue",
            default: "true"
        }
    ]);
    condition = cont.con;
}
console.log("THANKYOU");
