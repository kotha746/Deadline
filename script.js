// function calculateDays() {
//   const startDate = new Date(document.getElementById("start-date").value);
//   const endDate = new Date(document.getElementById("end-date").value);
//   const todayDate = new Date();
//   const timeDiff = endDate.getTime() - startDate.getTime();
//   const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
//   const timeDiff2 = todayDate.getTime() - startDate.getTime();
//   const daysGone = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
//   const daysLeft = totalDays - daysGone;



//   const text = "Stop Procrastinating, Start working! <br> The Clock is ticking. <br> What have you been doing for the last " + daysGone + " days? <br> <span class='days-left callout-urgent'>" + daysLeft + " DAYS LEFT</span>";
// document.getElementById("sidebar-text").innerHTML = text;


//   const visualization = document.getElementById("visualization");
//   let circles = "";
//   for (let i = 0; i < totalDays; i++) {
//     if (i < daysGone) {
//       circles += '<div class="day gone"></div>';
//     } else if (i < daysLeft + daysGone) {
//       circles += '<div class="day left"></div>';
//     } else {
//       circles += '<div class="day"></div>';
//     }
//   }
//   visualization.innerHTML = circles;
// }

function calculateDays() {
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);
  const todayDate = new Date();
  const timeDiff = endDate.getTime() - startDate.getTime();
  const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const timeDiff2 = todayDate.getTime() - startDate.getTime();
  const daysGone = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
  const daysLeft = totalDays - daysGone;

  const visualization = document.getElementById("visualization");
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const maxViewportSize = Math.max(viewportHeight, viewportWidth);
  const circleSizeFactor = 1.15; // adjust
  let circleSize = Math.floor(maxViewportSize * circleSizeFactor / totalDays);

  // circle size adjustment
  const minSize = 25;
  if (circleSize < minSize) {
    circleSize = minSize;
  }

  // adjust days 
  const maxSize = viewportHeight / 2;
  const maxTotalDays = 31;
  if (totalDays < maxTotalDays) {
    circleSize = Math.min(maxSize, Math.floor(maxViewportSize * circleSizeFactor / totalDays));
  }

  let circles = "";
  for (let i = 0; i < totalDays; i++) {
    if (i < daysGone) {
      circles += `<div class="day gone" style="width: ${circleSize}px; height: ${circleSize}px;"></div>`;
    } else if (i < daysLeft + daysGone) {
      circles += `<div class="day left" style="width: ${circleSize}px; height: ${circleSize}px;"></div>`;
    } else {
      circles += `<div class="day" style="width: ${circleSize}px; height: ${circleSize}px;"></div>`;
    }
  }
  visualization.innerHTML = circles;

  const text = `Stop Procrastinating, Start working! <br> The Clock is ticking. <br><br> <span class="days-gone callout"> ${daysGone} days have gone by </span><br> <span class='days-left callout-urgent'>${daysLeft} DAYS LEFT</span>`;
  document.getElementById("sidebar-text").innerHTML = text;
}

function togglePrint() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "print.css";
  document.head.appendChild(link);
  window.print();
  document.head.removeChild(link);
}

