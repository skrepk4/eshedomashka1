document.getElementById("myButton").addEventListener("click", () => {
    alert("Hello World!");
  });

const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("checkButton").addEventListener("click", () => {
const userGuess = parseInt(document.getElementById("guess").value);
const message = document.getElementById("message");

if (userGuess === randomNumber) {
      message.textContent = "Правильно! Ви вгадали число.";
    } else {
      message.textContent = `Неправильно. Спробуйте ще раз. Загадане число: ${randomNumber}`;
    }
  });

let count = 0;
document.body.addEventListener("click", () => {
count++;
document.getElementById("clickCount").textContent = count;
  });


const applyCallbackToArray = (arr, callback) => {
    return arr.map(callback);
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const result = applyCallbackToArray(numbers, (num) => num * 2);
  console.log(result);


const calculateDiscountPrice = (price, discount, callback) => {
const discountPrice = price - (price * discount / 100);
    callback(discountPrice);
};
  
calculateDiscountPrice(1000, 25, (newPrice) => {
    console.log(`Нова ціна зі знижкою: ${newPrice} грн.`);
});