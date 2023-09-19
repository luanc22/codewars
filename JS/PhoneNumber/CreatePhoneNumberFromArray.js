function createPhoneNumber(numbers){
    let phoneNumber;
    const [a, b, c, d, e, f, g, h, i, j] = numbers;
  
    //check if array has exactly 10 numbers and if they are integers btwn 0 and 9
    if (numbers.length === 10){
      for(let k = 0; k < 10; k++){
        if(numbers[k] < 0 && numbers[k] > 9){
          console.log("incorrect number");
        }
        else{
          phoneNumber = `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
        }
      }
    } 
    else {
      console.log("incorrect array");
    }
    
    return phoneNumber;
  }