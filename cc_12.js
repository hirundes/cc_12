//Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById('dashboard') //Use document.getElementById to select dashboard container.
const metricCard = document.createElement('div');   //Create new <div> with .createElement for metricCard
metricCard.setAttribute('class', 'metric-card');    //Assigning class metric-card
metricCard.setAttribute('id', 'revenueCard');       //Assigning id revenueCard
metricCard.innerHTML = `    
  <h2>Revenue</h2> 
  <p>$0</p>
`
;      //Populate card with "Revenue" and placeholder value
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
const inventoryList = document.getElementById("inventoryList")  //Nested structure inventoryList
function addInventoryItem(productName) {    //Function that creates a new <li> element representing the product
  const li = document.createElement("li")
  li.setAttribute('class', "product-item")  //setAttribute to add class product-item
  li.textContent = productName 
  li.addEventListener("click", function() {   //Seperate function that removes specific <li> when clicked
    removeInventoryItem(li)
  });
inventoryList.appendChild(li)   //Append li to the inventoryList.
};

function removeInventoryItem(item) {
  inventoryList.removeChild(item);    //Use removeChild within the inventory list
};


//Task 4 - Demonstrated Event Bubbling in Customer Section
const customerSection = document.getElementById("customerSection")  //Nested structure with parent container "customerSection"

const customerCard1 = document.createElement("div");
customerCard1.setAttribute("class", "customer-card");   //Child element "class","customer-card"
customerCard1.textContent = "Customer 1";
customerSection.appendChild(customerCard1);   //Appending customerCard1 to customerSection

const customerCard2 = document.createElement("div");
customerCard2.setAttribute("class", "customer-card");    //Child element "class", "customer-card"
customerCard2.textContent = "Customer 2";
customerSection.appendChild(customerCard2);   //Appending customerCard2 to customerSection

customerSection.addEventListener("click", function() {
  console.log("Customer section was clicked")   //Log message when customer section is clicked
});

document.querySelectorAll(".customer-card")
.forEach(card => {
  card.addEventListener("click", function(event) {
    console.log("Customer card clicked")      //Log message when customer card is clicked
    event.stopPropagation();
  });
});