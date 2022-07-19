'use strict'

//define variables
let allFood = [];
const main = document.getElementsByTagName('main');
const table = document.createElement('table');
table.className = 'table';
// create a constructor
 
function Food(foodName, foodType, price) {
     
 
  
console.log('lll') 
function Food( foodName, foodType, price) {
      
     this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;
    allFood.push(this);
}
let count=0;
Food.prototype.id = function () {
    return count++ + 1000;
}


//add event listner
const form = document.getElementById("formID");
form.addEventListener('submit', handleSubmit)

  
// Form sumbission has a default behavior of reloading the page
function handleSubmit(event) {
    event.preventDefault(); //prevent default refreshing

    let foodName = event.target.foodName.value;
    
    let foodType = event.target.foodType.value;
     
    let price = event.target.price.value;
    let newFood= new Food(foodName,foodType,price);
      
    newFood.id();
     localStorage.setItem("Food", JSON.stringify(allFood));

 //   newFood.render();
}
// this website helped me to write the table
// https://www.delftstack.com/howto/javascript/create-table-javascript/#:~:text=To%20create%20an%20HTML%20element,createElement('table')%20.
 
  

// Food.prototype.render =function(){

//     const row=document.createElement("tr");
//     const id=document.createElement("td");
//     id.className='table';
//     const name=document.createElement("td");
//     name.className='table';
//     const type=document.createElement("td");
//     type.className='table';
//     const price=document.createElement("td");
//     price.className='table';
    
//     id.textContent=this.id();
//     name.textContent=this.foodName;
//     type.textContent=this.foodType;
//     price.textContent=this.price;
    
//     row.appendChild(id);
//     row.appendChild(name);
//     row.appendChild(type);
//     row.appendChild(price);
//     table.appendChild(row);
//     main[0].appendChild(table);

// }