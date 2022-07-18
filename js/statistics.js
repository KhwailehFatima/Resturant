'use strict'
const main = document.getElementsByTagName('main');
 const table = document.createElement('table');
table.className = 'table';
// create a constructor
let allFood = [];
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

//let count=0;
Food.prototype.id = function () {
    return count++ + 1000;
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
    
    table.appendChild(tableRowHeader);
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
    table.appendChild(row)
    main[0].appendChild(table)
     
}

function renderAllFood() {
    let foodLocalStorage = JSON.parse(localStorage.getItem("Food"))
     
    if (foodLocalStorage !== null) {
        for (let i = 0; i < foodLocalStorage.length; i++) {
            new Food(foodLocalStorage[i].foodName, foodLocalStorage[i].type, foodLocalStorage[i].price);

        }
    }
    for (let i = 0; i < allFood.length; i++) {
        allFood[i].render()
    }
}

renderAllFood()