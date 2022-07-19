 'use strict'
const mainTwo = document.getElementsByTagName('main');
const tableTwo = document.createElement('table');
table.className = 'table';
// // create a constructor
let allFoodTwo=[];
 
function Food(foodName, foodType, price) {
     
    this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;
    allFoodTwo.push(this);
}
let countTwo=0;
Food.prototype.id = function () {
    return countTwo++ + 1000;
}

 

createTable();

function createTable(){

    let tableRowHeader=document.createElement("tr");
    tableRowHeader.className='table'
    let tableHeader1=document.createElement("td");// foodID
    tableHeader1.className='table'
    let tableHeader2=document.createElement("td");//foodName
    tableHeader2.className='table'
    let tableHeader3=document.createElement("td");//foodType
    tableHeader3.className='table'
    let tableHeader4=document.createElement("td");//foodPrice
    tableHeader4.className='table'
    
    tableHeader1.textContent="FoodID";
    tableHeader2.textContent="FoodName";
    tableHeader3.textContent="FoodType";
    tableHeader4.textContent="FoodPrice";
    
    //append a child
    tableRowHeader.appendChild(tableHeader1);
    tableRowHeader.appendChild(tableHeader2);
    tableRowHeader.appendChild(tableHeader3);
    tableRowHeader.appendChild(tableHeader4);
    
    tableTwo.appendChild(tableRowHeader);
    }

    Food.prototype.render=function(){
    const row=document.createElement("tr");
    const id=document.createElement("td");
    id.className='table';
    const name=document.createElement("td");
    name.className='table';
    const type=document.createElement("td");
    type.className='table';
    const price=document.createElement("td");
    price.className='table';
    
    id.textContent=this.id();
    name.textContent=this.foodName;
    type.textContent=this.foodType;
    price.textContent=this.price;
    
    row.appendChild(id)
    row.appendChild(name)
    row.appendChild(type)
    row.appendChild(price)
    tableTwo.appendChild(row)
    mainTwo[0].appendChild(tableTwo)
     
}

function renderAllFood() {
    let foodLocalStorage = JSON.parse(localStorage.getItem("Food"))
     console.log(foodLocalStorage)
    if (foodLocalStorage !== null) {
        for (let i = 0; i < foodLocalStorage.length; i++) {
            new Food(foodLocalStorage[i].foodName, foodLocalStorage[i].foodType, foodLocalStorage[i].price+"JD");

        }
    }
    for (let i = 0; i < allFoodTwo.length; i++) {
        allFoodTwo[i].render()
    }
}

renderAllFood()
