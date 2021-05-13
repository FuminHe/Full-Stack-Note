document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      // type:'column'
      // type:'bar'
      // type:'scatter'
      // type:'area'
      type: "areaspline",
    },
    credits: {
      //   enabled: false,
      text: "my site",
      href: "https://google.com",
      position: {
        align: "left",
        x: 20,
      },
      style: {
        fontSize: "12px",
        color: "red",
      },
    },
    title: {
      text: "FRUITS CHART",
    },
    yAxis: {
      title: {
        text: "Fruits Exported",
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
