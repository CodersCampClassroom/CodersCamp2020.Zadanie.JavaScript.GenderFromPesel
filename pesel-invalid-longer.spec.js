const genderFromPesel = require('./gender-from-pesel');

//Testy za 5 punktów

describe('Invalid PESEL - too long', () => {

  [
    '651105117434',
    '701125696491231231235123123',
  ].map(givenPesel => {
    test(`${givenPesel} is not valid pesel number`, () => {
      expect(() => genderFromPesel(givenPesel)).toThrowError(`${givenPesel} is not valid PESEL number!`)
    });
  })

})
