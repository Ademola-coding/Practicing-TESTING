const capitalize = require('../task4');

test('expected the string to be capitalized = "Achraf" ', () => {
  //Arrange
  const str = 'congrats';
  //Act 
  const capitalizedStr = capitalize(str);
  //Assert
  expect(capitalizedStr).toBe('Congrats');
})