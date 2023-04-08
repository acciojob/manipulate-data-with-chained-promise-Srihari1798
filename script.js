//your JS code here. If required.
function manipulateData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

manipulateData([1, 2, 3, 4])
  .then((array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredArray = array.filter((num) => num % 2 === 0);
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((filteredArray) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mappedArray = filteredArray.map((num) => num * 2);
        resolve(mappedArray);
      }, 2000);
    });
  })
  .then((mappedArray) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = mappedArray.join(", ");
  });
