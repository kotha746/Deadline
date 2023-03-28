function createVisualization() {
    // getitng input values 
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    var today = new Date(document.getElementById("today").value);
  
    // calculation of days 
    var remainingDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
    var totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
    // making the visualization
    var daysDiv = document.querySelector(".days");
    daysDiv.innerHTML = "";
    for (var i = 0; i < totalDays; i++) {
      var dayDiv = document.createElement("div");
      dayDiv.classList.add("day");
      if (i < totalDays - remainingDays) {
        dayDiv.classList.add("passed");
      }
      daysDiv.appendChild(dayDiv);
    }
  }