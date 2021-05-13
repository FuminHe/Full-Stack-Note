document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "line",
      zoomType: "xy",
    },
    title: {
      text: "Fruits Exported",
    },
    yAxis: {
      title: {
        text: "Fruits Eaten",
      },
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Grapes"],
    },
    series: [
      {
        name: "John",
        data: [3, 2, 3, 70, 2, 30, 10, 2, 3],
      },
      {
        name: "Jim",
        data: [1, 2, 3, 100, 2, 3, 1, 2, 3],
      },
      {
        name: "Jill",
        data: [1, 2, 3, 50, 20, 3, 1, 2, 3],
      },
    ],
  });
});
