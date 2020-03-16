var greaterThanArr = [1, 2, 3 , 4];

// function greaterThan(greaterThanArr){
//   var numberOfNumbers = 20;
//   if (numberOfNumbers > greaterThanArr.reduce((a, b) => a + b, 0) ){
//     return (numberOfNumbers);
//   }

// }
// console.log(greaterThan);


function greaterThan(){
  var numberOfNumbers = 20;
  if (numberOfNumbers > 1+2+3+4){
    return (numberOfNumbers);
  }

}
console.log(greaterThan);





// function greaterThan(greaterThanArr){

//   if (toString.call(greaterThanArr) !== '[object Array]')
//     return false;

//   var total =  0;
//   for(var i=0;i<greaterThanArr.length;i++)
//   {
//     if(isNaN(greaterThanArr[i])){
//       continue;
//     }
//     total += Number(greaterThanArr[i]);
//   }
//   return total;
// }
// console.log(greaterThan([1,2,3]));
