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
const foods = [];

function displayMessage(message){
  formMessage.textContent = message;
  formMessage.classList.remove("hidden");
}

foodForm.addEventListener("submit", (event) =>{
  event.preventDefault();
  const foodName = foodNameInput.value.trim();
  const calories = Number(caloriesInput.value);

  if (!foodName){
    displayMessage("Please enter a food name.");
    return;
  } else if (!caloriesInput.value || calories < 1 || calories > 10000){
    displayMessage("Please enter a calorie value between 1 and 10,000.");
    return;
  }

  foods.push({ foodName, calories });
  const foodItem = document.createElement("li");
  foodItem.className = "rounded bg-gray-100 px-4 py-2";
  foodItem.textContent = `${foodName}: ${calories} calories`;
  foodList.appendChild(foodItem);

  totalCalories.textContent = foods.reduce((total, food) => total + food.calories, 0);
  itemCount.textContent = `${foods.length} item${foods.length === 1 ? "" : "s"}`;
  emptyState.classList.add("hidden");
  formMessage.classList.add("hidden");
  foodForm.reset();
})

resetButton.addEventListener("click", () => {
  foods.length = 0;
  foodList.replaceChildren();
  formMessage.classList.add("hidden");
  totalCalories.textContent = "0";
  itemCount.textContent = "0 items";
  emptyState.classList.remove("hidden");
  
});

suggestButton.addEventListener("click", () => {
  if (!foodNameInput.value.trim()) {
    displayMessage("Enter a food name before requesting a suggestion.");
    return;
  }

  displayMessage("Enter the calorie amount shown on your food label.");
});
