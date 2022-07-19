'use strict'

//deine variables
let allFood = [];
const main = document.getElementsByTagName('main');
const table = document.createElement('table');
table.className = 'table';

const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');

// create a constructor
function Food(foodName, foodType, price) {
     
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

createTable();

// Form sumbission has a default behavior of reloading the page
function handleSubmit(event) {
    event.preventDefault(); //prevent default refreshing

    let foodName = event.target.foodName.value;
    
    let foodType = event.target.foodType.value;
     
    let price = event.target.price.value;
    let newFood= new Food(foodName,foodType,price);
    newFood.render();
}
// this website helped me to write the table
// https://www.delftstack.com/howto/javascript/create-table-javascript/#:~:text=To%20create%20an%20HTML%20element,createElement('table')%20.

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
// the name of the drink is the label
//the price of the drink is the data

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Rice', 'Broccoli', 'Bread', 'meet', 'soap'],
        datasets: [{
            label: '# of Votes',
            data: [2, 3, 1, 6, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const myChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
      labels: ['Rice', 'Broccoli', 'Bread', 'meet', 'soap'],
      datasets: [{
          label: '# of Votes',
          data: [2, 3, 1, 6, 2],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});