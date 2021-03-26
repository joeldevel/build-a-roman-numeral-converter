function convertToRoman(num) {
  // all possible bases
  let numArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  let romanSymbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  let i = 12;
  let div;
  let result = ""
    while(num>0)
    {
      // integer division
      div = Math.floor(num/numArray[i])
      num = num%numArray[i];
      while(div)
      {
        console.log(romanSymbols[i]);
        result+=romanSymbols[i];
        div--;
      }
      i--;
    }
    return result;
}

console.log(convertToRoman(3549));
