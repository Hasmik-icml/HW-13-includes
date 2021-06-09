//This method returns true if the array contains the element, and false if not.
let str = 'This method returns true if the array contains the element, and false if not.';
let num = [14, 0, 8, -1, 9, 5];

function includes(value, searchElement, start){
  if (typeof value === 'string'){
    let strArr = value.split(' ');
      for(let i = start; i < strArr.length; ++i){
        if(strArr[i] === searchElement){
          return true;
        }
      }
  }

  for (let j = start; j < value.length; ++j){
    if(value[j] === searchElement){
      return true;
    }
  }
  return false;
}

console.log(includes(str, 'contains', 8));
console.log(includes(num, -10, 0));