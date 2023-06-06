import fs from "fs";

export default function func()
 { fs.readFile("movie.json", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});}

func();