//1부터 number까지의 수 중에서 3의 배수에 대한 총 합.

let number = 100;
let j = 0;

for (let i = 1; i <= number; i++) {
  if (i % 3 == 0) {
    j += i;
  }
}

console.log("3의 배수에 대한 총합 : %d ", j);
