// k진수에서 소수 개수 구하기
const solution = (n,k) => {

  let answer = 0;
  // n을 k진수로 변환
  let arr = n.toString(k).split("0");

  arr.forEach((e) => {
    if (e != '' && e != '1') {
      // 계산할 수 있게 정수로 형변환
      let num = parseInt(e);
      let prime = true;
      // 소수 판별
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i == 0) {
          prime = false;
          break;
        }      
      }
      // 소수 판별
      // for (let i = 2; i <= num/2; i++) {
      //   if (num%2 == 0) {
      //     prime = false;
      //     break;
      //   }      
      // }
      // 참이라면 해당 수는 소수
      if (prime) {
        answer++;
      }
    }  
  });
  return answer;
}

console.log(solution(437674,3)); // 3
console.log(solution(110011,10)); // 2
console.log(solution(883438,3)); // 0