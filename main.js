'use strict';

const createBtn = document.querySelector('.js-btn');
const thisWeekMealsList = document.querySelector('.js-thisWeekMeals');

const dinnerOption = [
    {title : "Spinach's Hamburger", plate_id : 1},
    {title : "Sausages", plate_id : 2},
    {title : "Empanadillas", plate_id : 3},
    {title : "Pescado en salsa rubia", plate_id : 4},
    {title : "Courgette's Frittata", plate_id : 5},
    {title : "Quesadillas", plate_id : 6},
    {title : "Cream of Vegetables", plate_id : 7},
    {title : "Quesadillas", plate_id : 8},
    {title : "Pastina", plate_id : 9},
    {title : "Cocido de arroz", plate_id : 10},
    {title : "Courgette Penwheels", plate_id : 11},
    {title : "Mini CheeseBurgers", plate_id : 12},
    {title : "Eggs Muffins", plate_id: 13}
];

let nextPlateId = dinnerOption.length ? dinnerOption[dinnerOption.length - 1].plate_id + 1 : 1;

const lunchOption = [
    {title : "Pasta Carbonara"}
]

const thisWeekPlan = [];

function createMealPlan () {
    thisWeekMealsList.innerHTML ='';
    while (thisWeekPlan.length < 7) {
        let randomMeal = dinnerOption[Math.floor(Math.random() * dinnerOption.length)];
        const indexMeal = thisWeekPlan.findIndex((eachMeal) => eachMeal.plate_id === randomMeal.plate_id);
        if (indexMeal === -1) {
            thisWeekPlan.push(randomMeal);
        } 
    }
    
    for (const meal of thisWeekPlan) {
        thisWeekMealsList.innerHTML += `
        <li>${meal.title}</li>`
    }
};

createBtn.addEventListener('click', createMealPlan);

function addMeal(event) {
    event.preventDefault(); 
    
    const mealTitle = document.getElementById('title').value;
    
    if (mealTitle) {
        // Create the new meal object with an incremental plate_id
        const newMeal = {
            title: mealTitle,
            plate_id: nextPlateId
        };

        // Add the new meal to the dinnerOption array
        dinnerOption.push(newMeal);

        // Increment the next available plate_id
        nextPlateId++;

        console.log('Updated Dinner Options:', dinnerOption);

        // Optionally, reset the form input field
        document.getElementById('mealForm').reset();
    }
}

document.getElementById('mealForm').addEventListener('submit', addMeal);

