// const countryInfo = require("../country-info");
// En lugar de incluír acá el módulo "country-info", fuerzo a que lo pasen por parámetro.
// Esto permite que sea fácilmente testeable ya que puedo pasar un objecto "mockeado" de countryInfo.
// Patrón: dependency injection, inversion of control.

function validateResponse(data) {
  return data && data.code && data.name ? data : null;
}

module.exports = (countryInfo) => {

  function getByCode(code) {
    return new Promise((resolve, reject) => {
      countryInfo.getCountryInfo(code, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(validateResponse(data));
        }
      });
    });
  }

  function getByName(name) {
    return new Promise((resolve, reject) => {
      countryInfo.getCountryInfoByName(name, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(validateResponse(data));
        }
      });
    });
  }
  
  return {
    getByCode,
    getByName
  };
};
