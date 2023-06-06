import queryDB from "./queryDB.js";
import func from "./read.js";
import fs from "fs";
import ps from "prompt-sync";
import addData from "./add.js";
import updateData from "./update.js";
import deleteMovie from "./delete.js";
import searchData from "./search.js";
import add from "./append.js";
const  prompt=ps();
var option
function print()
{console.log(`
You May enter the number of the task you want to do !         
Please select an action:
1) Display Movie Catalog
2) Add New Movie
3) Update Movie Details
4) Delete Movie
5) Search and Filter
6) Fetch Movie Data
7) exit
***************************
What's your choice?  `);

 option =prompt(`:`);
if(option == "7"){
  ///  break;
}}
print();
switch(option){
    case "1":
    func();
    break;
    case "2":
    queryDB(addData);
    break;
    case "3":
    queryDB(updateData);
    break;
    case "4":
     queryDB(deleteMovie);
    break;
    case "5":
    queryDB(searchData);
    break;
    case "6":
    queryDB(add);
    break;
    default:
    print();
}
// print();



