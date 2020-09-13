const genderFromPesel = require('./gender-from-pesel');

//Testy za 5 punktów

describe('Invalid PESEL - too short', () => {

  [
    '12345',
    '6511051174'
  ].map(givenPesel => {
    test(`${givenPesel} is not valid pesel number`, () => {
      expect(() => genderFromPesel(givenPesel)).toThrowError(`${givenPesel} is not valid pesel number!`)
    });
  })

})
