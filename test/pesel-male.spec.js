const genderFromPesel = require('../gender-from-pesel');

describe('(10 punktów) Male PESEL', () => {

  [
    '89090132712',
    '96092842277',
    '01300846796',
    '83092964357'
  ].map(givenPesel => {
    test('pesel should belongs to MALE', () => {
      expect(genderFromPesel(givenPesel)).toBe("MALE")
    });
  })

})
