// 체육복
function solution(n, lost, reserve) {
  // 전체 인원수에서 체육복을 도둑맞은 학생 수 제외
  let answer = n - lost.length;
  // 체육복을 도둑맞았지만 여벌옷이 있던 학생 제외
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] == reserve[j]) {
        answer++;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }
  // 체육수업을 들을 수 있는 최대 학생수를 구할 수 있도록 정렬
  lost.sort((a,b) => a-b);
  reserve.sort((a,b) => a-b);
  // 도둑맞은 학생 앞 또는 뒤 번호에 학생에게 여벌옷이 있다면 인원수 추가
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if(reserve[j] == lost[i] - 1 || reserve[j] == lost[i] + 1){
        answer++;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(5, [2,4], [1,3,5])); // 5
console.log(solution(5, [2,4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(5, [4,2], [3,5])); // 5