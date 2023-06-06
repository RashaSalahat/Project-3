import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";

export default async function updateData(info) {
 
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "id",
        message: "Enter Record ID",
      },
    ]);

    let current;

    info.forEach((element) => {
      if (element.id == answers.id) {
        current = element;
        console.log("Id is found");
        updateDetails(current, info);
      }
    });
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}

async function updateDetails(current, info) {
  try {
    const feedbacks = await inquirer.prompt([
      {
        type: "input",
        default: current.title,
        name: "title",
        message: "What's the movie title?",
      },
      {
        type: "input",
        default: current.director,
        name: "director",
        message: "What's the movie director?",
      },
      {
        type: "input",
        default: current.releaseYear,
        name: "releaseYear",
        message: "What's the movie  release year?",
      },
      {
        type: "input",
        default: current.genre,
        name: "genre",
        message: "What's the movie genre?",
      }
    ]);

    current.title = feedbacks.title;
    current.director = feedbacks.director;
    current.releaseYear = feedbacks.releaseYear;
    current.genre = feedbacks.genre;
    await fs.writeFile("movie.json", JSON.stringify(info), function (err) {
      if (err) {
        console.log(err);
      }
      console.log("updated");
    });
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}

queryDB(updateData)