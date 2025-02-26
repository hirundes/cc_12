//Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById('dashboard') //Use document.getElementById to select dashboard container.
const metricCard = document.createElement('div');   //Create new <div> with .createElement for metricCard
metricCard.setAttribute('class', 'metric-card');    //Assigning class metric-card
metricCard.setAttribute('id', 'revenueCard');       //Assigning id revenueCard
metricCard.innerHTML = `    
  <h2>Revenue</h2> 
  <p>$0</p>
`;      //Populate card with "Revenue" and placeholder value
dashboard.appendChild(metricCard);  //Append new metric card to the dashboard container with appendChild

//Task 2 - Updated Metric Cards via Array Conversion
const selectMetricCards = document.querySelectorAll('metric-card'); //Use document.querySelectorAll to select elements with "metric-card"
const arrayOfMetricCards = Array.from(selectMetricCards);   //Use Array.from to convert into an array
arrayOfMetricCards.forEach(card => {
    card.querySelector('h2') =+ ' - Updated'    //Array list h2 as "- Updated"
    card.querySelector('p') =+ ' - Updated'     //Array list p as "- Updated"
}
);

//Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList")
function addInventoryItem(productName) {
  const li = document.createElement("li")
  li.setAttribute('class', "product-item")
  li.textContent = productName 
  li.addEventListener("click", function() {
    removeInventoryItem(li)
  })
inventoryList.appendChild(li)
};

function removeInventoryItem(item) {
  inventoryList.removeChild(item);
};

addInventoryItem("Phone");
