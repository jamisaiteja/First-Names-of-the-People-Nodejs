const list = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");
const getPeopleInCity = (list) => {
  return firstName(list);
};

module.exports = getPeopleInCity;
