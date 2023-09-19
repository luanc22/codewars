function toCamelCase(str){
    
    // convert string to char array
    let charArray = str.split('');
      
    // for with if checking for last char to be -
    for (let i = 0; i < charArray.length; i++) {
      if(charArray[i] === '-' || charArray[i] === '_' ){
        charArray[i+1] = charArray[i+1].toUpperCase();
        charArray[i] = "";
      }
    }    
    
    // char array to string
    str = charArray.join('');
    
    console.log(str);
    
    return str;
  }