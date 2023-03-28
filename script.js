// Get the input values
var startDate = new Date(document.getElementById("startDate").value);
var endDate = new Date(document.getElementById("endDate").value);
var today = new Date(document.getElementById("today").value);

// Calculate the remaining days
var remainingDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));

// Create a chart
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Days Remaining", "Days Passed"],
    datasets: [
      {
        label: "Days Left",
        data: [remainingDays, 365 - remainingDays],
        backgroundColor: ["#007bff", "#e9ecef"],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  },
});