#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";;
console.log(chalk.bgBlue("\n\tWelcome to adventure game App \n"));
function totileCase(sentence:string):string{
  return sentence.replace(/\b\w/g,c=>c.toUpperCase())
}
//* Classes and Opponent
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fueldecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fueldecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

//* Playe Name & Opponent Select
let player = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Please enter your name",
  },
]);

//* Convert player's name to title case
player.name = totileCase(player.name)

let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
  },
]);

//* Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

//If Condition
do {
  //* Skeleton
  if (opponent.select === "Skeleton") {
    let askInput = await inquirer.prompt([
      {
        name: "Opt",
        type: "list",
        message: "Select your opponent",
        choices: ["Attack", "Drink Portion", "Run for your life..."],
      },
    ]);
    if (askInput.Opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();
        console.log(chalk.bold.redBright(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic(`You Lose,Better luck Next Time`));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fueldecrease();
        console.log(chalk.bold.redBright(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic(`You Win`));
          process.exit();
        }
      }
    }
    if (askInput.Opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `Your Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (askInput.Opt === "Run for your life...") {
      console.log(chalk.bold.red.italic(`You Lose,Better luck Next Time`));
      process.exit();
    }
  }

  //* Assassin
  if (opponent.select === "Assassin") {
    let askInput = await inquirer.prompt([
      {
        name: "Opt",
        type: "list",
        message: "Select your opponent",
        choices: ["Attack", "Drink Portion", "Run for your life..."],
      },
    ]);
    if (askInput.Opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();
        console.log(chalk.bold.redBright(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic(`You Lose,Better luck Next Time`));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fueldecrease();
        console.log(chalk.bold.redBright(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic(`You Win`));
          process.exit();
        }
      }
    }
    if (askInput.Opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
         ` Your Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (askInput.Opt === "Run for your life...") {
      console.log(chalk.bold.red.italic(`You Lose,Better luck Next Time`));
      process.exit();
    }
  }

  //* Zombie
  if (opponent.select === "Zombie") {
    let askInput = await inquirer.prompt([
      {
        name: "Opt",
        type: "list",
        message: "Select your opponent",
        choices: ["Attack", "Drink Portion", "Run for your life..."],
      },
    ]);
    if (askInput.Opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();
        console.log(chalk.bold.redBright(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red.italic(`You Lose,Better luck Next Time`));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fueldecrease();
        console.log(chalk.bold.redBright(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.green.italic(`You Win`));
          process.exit();
        }
      }
    }
    if (askInput.Opt === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(
          `Your Drink Health Portion Your Fuel is ${p1.fuel}`
        )
      );
    }
    if (askInput.Opt === "Run for your life...") {
      console.log(chalk.bold.red.italic(`You Lose,Better luck Next Time`));
      process.exit();
    }
  }
} while (true);