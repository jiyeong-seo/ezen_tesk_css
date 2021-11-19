//x가 하샤드 수인지 아닌지 검사하는 함수 solution을 만들어라.
function solution(n) {
  let s_n = String(n).split("");
  let sum = 0;
  for (let i = 0; i < s_n.length; i++) {
    sum += parseInt(s_n[i]);
  }
  if (n % sum == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(17));
