//동수가 부모님께 받아야 하는 돈의 액수를 리턴하는 함수 solution

function solution (k,n,m){
  let m_k = k;
  let m_n = n;
  let m_m = m;

  let m_solution = (m_k*m_n)-m_m;
  console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다.",m_solution);
}

solution(250,2,140);
