// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // цикл ходит каждый раз
    // i изначально равно 0
    // i c каждым шагом увеличивается на 1
    // arr[i] это значение каждого элемента 
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const avg = sum / arr.length;

  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(arrOfArr[i]);
    if (resultFunc > max) {
      max = resultFunc;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max - min;
}

