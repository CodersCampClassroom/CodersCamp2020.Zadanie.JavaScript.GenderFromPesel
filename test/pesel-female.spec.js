const genderFromPesel = require('../gender-from-pesel');

describe('(10 punktów) Female PESEL', () => {

  [
    '65110511743',
    '70112569649',
    '48030374667',
    '00301791241'
  ].map(givenPesel => {
    test('pesel should belongs to FEMALE', () => {
      expect(genderFromPesel(givenPesel)).toBe("FEMALE")
    });
  })

})
