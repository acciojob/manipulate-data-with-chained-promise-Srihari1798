// //your JS code here. If required.
// function manipulateData(array) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(array);
//     }, 3000);
//   });
// }

// manipulateData([1,3,5,8,10])
//   .then((array) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const filteredArray = array.filter((num) => num % 2 === 0);
//         resolve(filteredArray);
//       }, 1000);
//     });
//   })
//   .then((filteredArray) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const mappedArray = filteredArray.map((num) => num * 2);
//         resolve(mappedArray);
//       }, 2000);
//     });
//   })
//   .then((mappedArray) => {
//     const outputElement = document.getElementById("output");
//     outputElement.textContent = mappedArray.join(", ");
//   });


const inputArray = [1, 2, 3, 4];

function manipulateData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredArray = array.filter((num) => num % 2 === 0);
      const mappedArray = filteredArray.map((num) => (num % 2 === 0 ? num * 2 : num));
      resolve(mappedArray);
    }, 3000);
  });
}

const outputElement = document.getElementById("output");

manipulateData(inputArray).then((resultArray) => {
  setTimeout(() => {
    outputElement.textContent = resultArray.join(", ");
  }, 1000);
  setTimeout(() => {
    outputElement.textContent = resultArray.join(", ");
  }, 2000);
});
