function getArrayParams(...arr) {
  let min = +Infinity;
  let max = -Infinity;
  min = Math.min(...arr);
  max = Math.max(...arr);

  let sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0)

  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if ( arr.length === 0) {
    return 0;
  }
  return arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0);
} 

function differenceMaxMinWorker(...arr) {
  if ( arr.length === 0) {
    return 0;
  }
  
  return Math.max(...arr) - Math.min(...arr);
}


function differenceEvenOddWorker(...arr) {
  if ( arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0 ) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if ( arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let evenCounter = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0 ) {
      sumEvenElement += arr[i];
      evenCounter += 1;
    } 
  }

  return sumEvenElement / evenCounter;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const funcResult = func(...arrOfArr[i]); 
  for (let i = 0; i < arrOfArr.length; ++i) {
   if (funcResult > maxWorkerResult) {
    maxWorkerResult = funcResult;
   }
  }
  return maxWorkerResult;
}
