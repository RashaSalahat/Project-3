import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";
import ps from "prompt-sync";
export default async function searchData(info) {
 
  try {
    console.log(`
    You May search for the movie by title, director, or genre !         
    Please select an action:
    1) Title
    2) Director
    3) Genre
    What's your choice?  `);

    var answers;
    const  prompt=ps();
    var option =prompt(`:`);
    switch(option){
        case "1":
        answers = await inquirer.prompt([
            {
              type: "input",
              name: "title",
              message: "Enter movie title",
            },
          ]);
          let fla=0;
          info.forEach((element) => {
            if (element.title == answers.title) {
              console.log("The Movie is"+ JSON.stringify(element));  
              fla=1;
            }
          });
          if(fla==0){
            console.log("The Movie does not exist"); 
          }
        break;
        case "2":
             answers = await inquirer.prompt([
                {
                  type: "input",
                  name: "director",
                  message: "Enter movie director",
                },
              ]);
              let flag=0;
              info.forEach((element) => {
                if (element.director == answers.director) {
                    console.log("The Movie is"+ JSON.stringify(element));  
                    flag=1;
                }
              });
              if(flag==0){
                console.log("The Movie does not exist"); 
              }
        break;
        case "3":
            answers = await inquirer.prompt([
                {
                  type: "input",
                  name: "genre",
                  message: "Enter movie genre",
                },
              ]);
              let flag1=0;
              info.forEach((element) => {
                if (element.genre == answers.genre) {
                    console.log("The Movie is"+ JSON.stringify(element));  
                    flag1=1;
                }
              });
              if(flag1==0){
                console.log("The Movie does not exist"); 
              }
              break;
    }



   
    
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}



queryDB(searchData)