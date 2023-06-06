import inquirer from "inquirer";
import fs from "fs";
import { v4 as uuid4 } from "uuid";
import queryDB from "./queryDB.js";


export default async function addData(info) {
    try {
      const answers = await inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "What's the movie title?",
        },
        {
            type: "input",
            name: "director",
            message: "What's the movie director?",
          },
          {
            type: "input",
            name: "releaseYear",
            message: "What's the movie  release year?",
          },
          {
            type: "input",
            name: "genre",
            message: "What's the movie genre?",
          }
      ]);
  
      const data = {
        id: uuid4(),
        title: answers.title,
        director: answers.director,
        releaseYear: answers.releaseYear,
        genre: answers.genre
      };

      info.push(data);
   // console.log(data);
   // info.push({"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"});
      if (fs.existsSync("movie.json")) {
        createDetails(info);
      } else {
        fs.appendFile("movie.json", "[]", (err) => {
          if (err) {
            console.log("Could not create db.json", err);
            return;
          }
          createDetails(info);
        });
      }
    } catch (error) {
      console.log("Something went wrong!", error);
    }
  }
  

  async function createDetails(info) {
    await fs.writeFile("movie.json", JSON.stringify(info), function (err) {
      if (err) {
        console.log(err);
      }
      console.log("saved!");
    });
  }
  
//queryDB(addData);
 // addData(info);