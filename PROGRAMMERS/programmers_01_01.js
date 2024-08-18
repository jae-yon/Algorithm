// 짝수와 홀수
function solution(num) {
  return (num%2==0)? 'Even':'Odd';
}

console.log(solution(5)); // Odd
console.log(solution(0)); // Even