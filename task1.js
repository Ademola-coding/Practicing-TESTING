const stringLength = (string) => {
    if (string.length > 1 && string.length < 10) 
          return string.length;
    else { 
        throw new Error("the string have to be less than 1 character long or longer than 10.")
     }
  }
  
  module.exports = stringLength;