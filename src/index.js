module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];  
  const BRACKETS_PAIR = {};
  bracketsConfig.forEach((bracket) => BRACKETS_PAIR[bracket[0]] = bracket[1]);

  let array = str.split('');

  for(let i = 0; i < array.length; i++) {
      let currentSymbol = array[i];
      let topElement = stack[stack.length - 1];

      if(BRACKETS_PAIR[topElement] === currentSymbol) {        
        stack.pop();        
      } else if(BRACKETS_PAIR[currentSymbol]) {
        stack.push(currentSymbol);
      } else {
          return false;  
      };
      
  }
  return stack.length === 0;
}
