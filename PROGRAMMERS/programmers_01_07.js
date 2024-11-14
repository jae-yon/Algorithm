// 외톨이 알파벳
function solution(input_string) {
  
  var array = [];

  for (var i = 0; i < input_string.length; i++) {
    array.push(input_string.charAt(i));
  }

  return array;
}

console.log(solution('eeddee'));
console.log(solution('string'));