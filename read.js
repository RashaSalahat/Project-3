import fs from "fs";

fs.readFile("movie.json", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});