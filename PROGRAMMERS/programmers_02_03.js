//피로도
// dungeons[i][0] = 최소 피로도
// dungeons[i][1] = 사용 피로도

let answer = 0;

function solution(k, dungeons) {
  // 던전 방문 여부를 기록할 배열 초기화
  let visited = new Array(dungeons.length);

  dfs(dungeons, visited, 0, k);

  return answer;
}

function dfs(dungeons, visited, count, k) {

  if (count > answer) {
    answer = count;
  }
  // 모든 던전 탐험 경우의 수를 계산
  for (let i = 0; i < dungeons.length; i++) {
    // 던전을 방문하지 않았고 현재 체력으로 탐험 가능한 경우
    if (!visited[i] && dungeons[i][0] <= k) {
      // 방문 처리
      visited[i] = true;
      dfs(dungeons, visited, count + 1, k - dungeons[i][1]);
      // 방문 해제
      visited[i] = false;
    }
  }
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));