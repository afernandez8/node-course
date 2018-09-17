/* eslint func-style: 0 */
const fs = require("fs"),
  file = `${__dirname}/countries.json`;

function loadFileAndFind(findFunc, cb) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    }

    let country = null;
    try {
      country = JSON.parse(data).find(findFunc);
    } catch (error) {
      return cb(error, null);
    }
    
    return cb(null, country);
  });
}

module.exports = {

  getCountryInfo(code, cb) {
    const findByCode = (c) => c.code === code;
    loadFileAndFind(findByCode, cb);
  },

  getCountryInfoByName(name, cb) {
    const findByName = (c) => c.name === name;
    loadFileAndFind(findByName, cb);
  }

};