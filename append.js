import fs from "fs";
import queryDB from "./queryDB.js";


export default async function add(info) {
    try {
       await fetch('https://dummyapi.online/api/movies')
        .then(response => response.json())
        .then(data => {
          console.log(data);
       //   info.push(data);
       data.forEach((element) => {  
        info.push(element);
         });
        })
        .catch(error => {
          console.error(error);
        });

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
  
queryDB(add);