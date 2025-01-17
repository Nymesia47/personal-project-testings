'use strict';

const createBtn = document.querySelector('.js-btn');
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
];

const lunchOption = [
    {title : "Pasta Carbonara"}
]

const thisWeekPlan = [];

function createMealPlan () {
    while (thisWeekPlan.length < 7) {
        let randomMeal = dinnerOption[Math.floor(Math.random() * dinnerOption.length)];
        const indexMeal = thisWeekPlan.findIndex((eachMeal) => eachMeal.plate_id === randomMeal.plate_id);
        if (indexMeal === -1) {
            thisWeekPlan.push(randomMeal);
        } 
    }
    
console.log(thisWeekPlan);
};

createBtn.addEventListener('click', createMealPlan);

