// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf8", (err, dataToBeRead1) => {
    if (err) {
      return fnCallback(err);
    }
    fs.readFile(file2, "utf8", (err, dataToBeRead2) => {
      if (err) {
        return fnCallback(err);
      }
      fs.readFile(file3, "utf8", (err, dataToBeRead3) => {
        let result =
          JSON.parse(dataToBeRead1).message +
          " " +
          JSON.parse(dataToBeRead2)[0].message +
          " " +
          JSON.parse(dataToBeRead3)[0].data.message;
        fnCallback(
          err,
          result
            .split(" ")
            .filter((element) => element.toLowerCase() !== "halo")
        );
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
