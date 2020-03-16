var greaterThanArr = [1, 2, 3];

var bigger = 2;
var numberOfNumbers = 5;

function greaterThan( greaterThanArr, bigger){
  for ( var i =0; i< greaterThanArr.length;i++){
    if(greaterThanArr[i]> bigger){
      numberOfNumbers++;

    }
  }
  // console.log(numberOfNumbers);
  return numberOfNumbers;
}
var finalResults = greaterThan(greaterThanArr, bigger);
console.log('results: ',finalResults);






// function greaterThan(greaterThanArr){
//   var numberOfNumbers = 20;
//   if (numberOfNumbers > greaterThanArr.reduce((a, b) => a + b, 0) ){
//     return (numberOfNumbers);
//   }

// }
// console.log(greaterThan);




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
