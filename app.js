const numbers=[100,500,400,5000,20];

const avaerage=numbers.length;
const sum=numbers;
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
const average=sum/numbers.length;

console.log(sum);
console.log(average);