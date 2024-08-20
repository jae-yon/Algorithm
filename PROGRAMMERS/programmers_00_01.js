// qr code
function solution(q, r, code) {
  let answer = '';
  for (let i = 0; i < code.length; i++) {
    if (i%q == r) {
      answer += code.charAt(i);
    }  
  }
  return answer;
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // jerry
console.log(solution(1, 0, "programmers")); // programmers
