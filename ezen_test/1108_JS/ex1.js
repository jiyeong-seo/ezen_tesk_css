//주민번호 앞 부분과 뒷 부분의 첫 번째 글자 변수에 저장
let ssn = "9612202";
let now_year = 2021;

let yy = parseInt(ssn.substring(0, 2));
const gen = parseInt(ssn.substring(6));

yy = gen > 2 ? yy + 2000 : yy + 1900;
let age = now_year - yy + 1;
let sex = gen % 2 ? "남자" : "여자";
console.log("당신은 %d세 %s입니다.",age,sex);
