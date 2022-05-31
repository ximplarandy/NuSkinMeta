const fs = require('fs');

// // File destination.txt will be created or overwritten by default.
// fs.copyFile('source.txt', 'destination.txt', (err) => {
//   if (err) throw err;
//   console.log('source.txt was copied to destination.txt');
// });

fs.readdir("raw_images", (err, files) => {
    files.forEach(file => {
    //   console.log(file.split(" ")[0]+ ".png");
        let newfilename = file.split(" ")[0]+ ".png";

      fs.copyFile("./raw_images/" + file, './data/'+ newfilename, (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});
    });
  });
