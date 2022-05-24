const fs = require("fs");
const path = require("path");

const generateData= async (i)=> {
  let filenameHex = i.toString(16).padStart(64, "0") + ".json";
  let filenameDec = "" + i + ".json";

  let content = {
        "description": "Nu Skin LumiSpa iO #MySuperpower NFT #" + i.toString(10).padStart(4, "0"),
        "external_url": "https://forum.openzeppelin.com",
        "image": "https://raw.githubusercontent.com/ximplarandy/NuSkinMeta/main/data/" + i + ".png",
        "name": "Nu Skin LumiSpa iO #MySuperpower NFT #" + i.toString(10).padStart(4, "0")
      }
  fs.writeFileSync('data/' + filenameHex, JSON.stringify(content))
  fs.writeFileSync('data/' + filenameDec, JSON.stringify(content))
}
for (let i = 0; i < 50; i++) {
  console.log("generating:" + i);
  generateData(i);
}

