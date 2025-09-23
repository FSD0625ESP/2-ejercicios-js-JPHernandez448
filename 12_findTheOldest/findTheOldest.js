const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();
    const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
