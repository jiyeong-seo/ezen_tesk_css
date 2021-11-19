//학생의 성적에 대해 student 클래스를 작성하고 각 메서드의 실행결과 제시.

let sum = 0;
let avg = 0;
let add = [];
let varTotal = 0;

class student {
  constructor() {
    this._grade = new Array();
  }
  set grade(value) {
    this._grade.push(value);
  }
  getSumAvg() {
    for (let i = 0; i < this._grade.length; i++) {
      sum += this._grade[i];
    }
    avg = sum / this._grade.length;
    add.push(sum, avg);
    return add;
  }
  getMinMax() {
    for (let i = 0; i < this._grade.length - 1; i++) {
      for (let j = i + 1; j < this._grade.length; j++) {
        if (this._grade[i] > this._grade[j]) {
          let tmp = this._grade[i];
          this._grade[i] = this._grade[j];
          this._grade[j] = tmp;
        }
      }
    }
    let maxMin = { min: this._grade[0], max: this._grade[4] };
    return maxMin;
  }
  getVar() {
    for (let i = 0; i < this._grade.length; i++) {
      let getvar = this._grade[i] - sum;
      varTotal += getvar * getvar;
    }
    let getSomeVar = varTotal / (this._grade.length - 1);
    return getSomeVar;
  }
  getStd() {
    let Std = Math.sqrt(varTotal / (this._grade.length - 1));
    return Std;
  }
}

const s = new student();

s.grade = 82;
s.grade = 76;
s.grade = 91;
s.grade = 98;
s.grade = 64;

console.log(s.getSumAvg()); // 합계와 평균을 배열로 반환하는 메서드
console.log(s.getMinMax()); // 최하점과 최고점을 JSON으로 리턴하는 메소드
console.log( s.getVar()); // 분산을 리턴하는 메소드
console.log( s.getStd()); //표준편차를 리턴하는 메소드
