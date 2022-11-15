const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Sensor 1",

      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 13, 5, 2, 20, 30, 45, 34, 10, 32, 16, 3],
    },
    {
      label: "Sensor 2",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 20, 15, 2, 30, 10, 15, 4, 12, 12, 26, 5],
    },
    {
      label: "Sensor 3",
      backgroundColor: "rgb(255, 9, 32)",
      borderColor: "rgb(255, 9, 32)",
      data: [0, 30, 25, 12, 40, 20, 10, 14, 2, 22, 16, 15],
    },
    {
      label: "Sensor 4",
      backgroundColor: "rgb(55, 9, 32)",
      borderColor: "rgb(55, 9, 32)",
      data: [0, 10, 5, 22, 30, 17, 11, 20, 12, 32, 26, 3],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "white",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "white",
        },
        beginAtZero: true,
        title: {
          display: true,
          text: "Moisture (%)",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        beginAtZero: true,
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);

// Semi Circle # 1
const semiCircledata = {
  labels: ["Red"],
  datasets: [
    {
      data: [200, 50],
      backgroundColor: ["#FF0000", "rgba(102, 102, 102, 1)"],
      borderColor: ["#FF0000", "rgba(102, 102, 102, 1)"],
      borderRadius: 30,
    },
  ],
};

//thermometerText
const thermometerText = {
  id: "thermometerText",
  afterDatasetsDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    ctx.save();
    ctx.font = "bolder 40px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(`44 *C`, width / 2, height / 2 + 30);
  },
};

const semiconfig = {
  type: "doughnut",
  data: semiCircledata,
  options: {
    circumference: 180,
    rotation: 270,
    cutout: "80%",
    aspectRatio: 3,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        filter: (tooltipItem) => {
          return tooltipItem.dataIndex === 0;
        },
      },
    },
  },
  plugins: [thermometerText],
};

const myChart2 = new Chart(document.getElementById("myChart2"), semiconfig);

// Semi Circle # 2
const semiCircledata2 = {
  labels: ["Bluish"],
  datasets: [
    {
      data: [100, 50],
      backgroundColor: ["#6CE5E8", "rgba(102, 102, 102, 1)"],
      borderColor: ["#6CE5E8", "rgba(102, 102, 102, 1)"],
      borderRadius: 30,
    },
  ],
};

//waterText
const waterText = {
  id: "waterText",
  afterDatasetsDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    ctx.save();
    ctx.font = "bolder 40px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(`34%`, width / 2, height / 2 + 30);
  },
};

const semiconfig2 = {
  type: "doughnut",
  data: semiCircledata2,
  options: {
    circumference: 180,
    rotation: 270,
    cutout: "80%",
    aspectRatio: 3,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        filter: (tooltipItem) => {
          return tooltipItem.dataIndex === 0;
        },
      },
    },
  },
  plugins: [waterText],
};

const myChart3 = new Chart(document.getElementById("myChart3"), semiconfig2);

// DoughNut Chart
const doughnutdata = {
  labels: [
    "Sensor 1 \n 16.7%",
    "Sensor 2 \n 16.7%",
    "Sensor 3 \n 16.7%",
    "Sensor 4 \n 16.7%",
    "Sensor 5 \n 16.7%",
    "Sensor 6 \n 16.7%",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [50, 50, 50, 50, 50, 50],
      backgroundColor: [
        "#7ED957",
        "#00B980",
        "#009299",
        "#006995",
        "#003F72",
        "#585A92",
      ],
      borderColor: [
        "#7ED957",
        "#00B980",
        "#009299",
        "#006995",
        "#003F72",
        "#585A92",
      ],
      // hoverOffset: 4,
    },
  ],
};

// For doughnutText
const doughnutText = {
  id: "doughnutText",
  afterDatasetsDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { left, right, top, bottom, width, height },
    } = chart;
    ctx.save();
    ctx.font = "bolder 20px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(`Water Usage`, width / 1.8, height / 2 + top);
  },
};
// For doughnutLabel
const doughnutLabel = {
  id: "doughnutLabel",
  afterDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    chart.data.datasets.forEach((dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
        const { x, y } = datapoint.tooltipPosition();

        const halfwidth = width / 2;
        const halfheight = height / 2;

        // Lines
        const xLine = x >= halfwidth ? x + 30 : x - 30;
        const yLine = y >= halfheight ? y + 10 : y - 10;
        const extraLine = x >= halfwidth ? 30 : -30;

        //Label Text
        const textWidth = ctx.measureText(chart.data.labels[index]).width;
        ctx.font = "13px Arial";

        // Control the position
        ctx.textBaseline = "middle";
        ctx.fillText(chart.data.labels[index], xLine + extraLine, yLine);
      });
    });
  },
};

const doughnutConfig = {
  type: "doughnut",
  data: doughnutdata,
  options: {
    layout: {
      padding: 20,
    },
    cutout: "50%",
    aspectRatio: 1.3,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [doughnutText, doughnutLabel],
};

const mydoughnutChart = new Chart(
  document.getElementById("mydoughnutChart"),
  doughnutConfig
);

////////// For Battery (Water Litres)
const forBattery1 = 600;
const forBattery2 = 200;
const forBattery3 = 800;
const forBattery4 = 400;
const forBattery5 = 200;
const forBattery6 = 200;

const batteryStages1 = document.getElementById("main-battery1").children;
const batteryStages2 = document.getElementById("main-battery2").children;
const batteryStages3 = document.getElementById("main-battery3").children;
const batteryStages4 = document.getElementById("main-battery4").children;
const batteryStages5 = document.getElementById("main-battery5").children;
const batteryStages6 = document.getElementById("main-battery6").children;

const batteryFuntion = (value, batteryStages) => {
  if (value <= 100) {
    for (let index = 0; index < 1; index++) {
      batteryStages[index].classList.add("lowStages");
    }
  } else if (value <= 200) {
    for (let index = 0; index < 2; index++) {
      batteryStages[index].classList.add("lowStages");
    }
  } else if (value <= 300) {
    for (let index = 0; index < 3; index++) {
      batteryStages[index].classList.add("lowStages");
    }
  } else if (value <= 400) {
    for (let index = 0; index < 4; index++) {
      batteryStages[index].classList.add("mediumStages");
    }
  } else if (value <= 500) {
    for (let index = 0; index < 5; index++) {
     batteryStages[index].classList.add("mediumStages");
    }
  } else if (value <= 600) {
    for (let index = 0; index < 6; index++) {
       batteryStages[index].classList.add("mediumStages");
    }
  } else if (value <= 700) {
    for (let index = 0; index < 7; index++) {
      batteryStages[index].classList.add("mediumStages");
    }
  } else if (value <= 800) {
    for (let index = 0; index < 8; index++) {
     batteryStages[index].classList.add("higher-litres");
    }
  } else if (value <= 900) {
    for (let index = 0; index < 9; index++) {
     batteryStages[index].classList.add("higher-litres");
    }
  } else {
    for (let index = 0; index < 10; index++) {
       batteryStages[index].classList.add("higher-litres");
    }
  }
};

batteryFuntion(forBattery1, batteryStages1);
batteryFuntion(forBattery2, batteryStages2);
batteryFuntion(forBattery3, batteryStages3);
batteryFuntion(forBattery4, batteryStages4);
batteryFuntion(forBattery5, batteryStages5);
batteryFuntion(forBattery6, batteryStages6);
