// 최소직사각형
function solution(sizes) {
  let w = 0;
  let y = 0;
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort(function(a, b) {
      return a-b;
    });
    if (w < sizes[i][1]) {
      w = sizes[i][1];
    }
    if (y < sizes[i][0]) {
      y = sizes[i][0];
    }
  }
  return w*y;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133