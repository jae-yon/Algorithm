// 완주하지 못한 선수
function solution(participant, completion) {
  // 배열을 이름순으로 정렬
  completion.sort();
  participant.sort();
  // 반복문을 통해 다른 값을 return
  for (const i in participant) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"

// 완주하지 못한 선수 <===== timeout error
// function solution(participant, completion) {
//   completion.forEach((e,i) => {
//     for (let j in participant) {
//       if (participant[j] == e) {
//         participant[j] = '';
//         completion[i] = '';
//         break;
//       }
//     }
//   })
//   for (const i in participant) {
//     if (participant[i] != '') {
//       return participant[i];
//     }
//   }
// }
