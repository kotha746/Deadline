function calculateDays() {
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const todayDate = new Date();
    const timeDiff = endDate.getTime() - startDate.getTime();
    const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const timeDiff2 = todayDate.getTime() - startDate.getTime();
    const daysGone = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
    const daysLeft = totalDays - daysGone;
  
    const text = "Stop Procrastinating! Start working! The Clock is ticking.<br>What have you been doing for the last " + daysGone + " days?";
    document.getElementById("stop-procrastinating").innerHTML = text;
  
    const visualization = document.getElementById("visualization");
    let circles = "";
    for (let i = 0; i < totalDays; i++) {
      if (i < daysGone) {
        circles += '<div class="day gone"></div>';
      } else if (i < daysLeft + daysGone) {
        circles += '<div class="day left"></div>';
      } else {
        circles += '<div class="day"></div>';
      }
    }
    visualization.innerHTML = circles;
  }