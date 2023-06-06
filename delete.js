import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";

export default async function deleteMovie(info) {

  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "id",
        message: "Enter movie ID",
      },
    ]);

    let remnantData = [];

    info.forEach((element) => {
      if (element.id != answers.id) {
        remnantData.push(element);

      }
      else{
        console.log("movie must be deleted!");
      }
    });

    fs.writeFile("movie.json", JSON.stringify(remnantData), function (err) {
      if (err) {
        console.log(err);
      }
      console.log("movie is Deleted!");
    });
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}
//queryDB(deleteMovie);
