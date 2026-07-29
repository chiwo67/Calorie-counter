const resetButton = document.getElementById("reset-btn");
const totalCalories = document.getElementById("total-calories");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const suggestButton = document.getElementById("suggest-btn");
const caloriesInput = document.getElementById("calories");
const formMessage = document.getElementById("form-message");
const itemCount = document.getElementById("item-count");
const foodList = document.getElementById("food-list");
const emptyState = document.getElementById("empty-state");

function displayMessage(message){
  formMessage.textContent = message;
  formMessage.className.remove("hidden")

}

foodList.addEventListener("submit", (event) =>{
  event.preventDefault();
  if (foodNameInput === ""){
    displayMessage("Please enter a food input value")
  
  }else if(caloriesInput === "" || caloriesInput < 0 || caloriesInput > 10000){
    displayMessage("Please enter a calorie input value")
  }
  
  const foodItem = document.createElement("li");
  foodItem.className = "rounded bg-gray-100 px-4 py-2";
  foodItem.textContent = `${foodName}: ${calories} calories`;
  foodList.appendChild(foodItem);
})