//Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById('dashboard') //Use document.getElementById to select dashboard container.
const metricCard = document.createElement('div');   //Create new <div> with .createElement for metricCard
metricCard.setAttribute('class', 'metric-card');    //Assigning class metric-card
metricCard.setAttribute('id', 'revenueCard');       //Assigning id revenueCard
metricCard.innerHTML = `    
  <h2>Revenue</h2> 
  <p2>$0</p2>
`;      //Populate card with "Revenue" and placeholder value
dashboard.appendChild(metricCard);  //Append new metric card to the dashboard container with appendChild
