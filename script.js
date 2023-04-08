const inputArray = [1, 2, 3, 4];

function getDataArray() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });
}

getDataArray()
  .then((dataArray) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredArray = dataArray.filter(num => num % 2 === 0);
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((filteredArray) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const doubledArray = filteredArray.map(num => num * 2);
        resolve(doubledArray);
      }, 2000);
    });
  })
  .then((finalArray) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = finalArray.join(", ");
  })
  .catch((error) => {
    console.error(error);
  });
