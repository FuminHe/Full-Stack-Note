const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

// --------- rect - scale the original data--------------
d3.json("./data/buildings.json").then((data) => {
  // convert age to number
  data.forEach((d) => {
    d.height = Number(d.height);
  });

  // define the linear scale and band scale
  const y = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.height), d3.max(data, (d) => d.height)])
    .range([0, 400]);
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, 400])
    .paddingInner(0.3)
    .paddingOuter(0.2);

  const rects = svg.selectAll("rect").data(data);
  rects
    .enter()
    .append("rect")
    .attr("y", 0)
    .attr("x", (d) => x(d.name))
    .attr("width", x.bandwidth)
    .attr("height", (d) => y(d.height))
    .attr("fill", "grey");
});

// ---------- external data - circles---------------
// d3.json("./data/ages.json").then((data) => {
//   // convert age to number
//   data.forEach((d) => {
//     d.age = Number(d.age);
//   });

//   const svg = d3
//     .select("#chart-area")
//     .append("svg")
//     .attr("width", 400)
//     .attr("height", 400);

//   const circles = svg.selectAll("circle").data(data);
//   circles
//     .enter()
//     .append("circle")
//     .attr("cx", (d, i) => i * 50 + 50)
//     .attr("cy", 200)
//     .attr("r", (d, i) => d.age * 2)
//     .attr("fill", (d) => {
//       if (d.name === "Tony") return "blue";
//       else return "red";
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// -------------------------------------------------
// // attach svg tag to div in html
// const svg = d3
//   .select("#chart-area")
//   .append("svg")
//   .attr("width", 400)
//   .attr("height", 400);

// const data = [25, 20, 10, 12, 15];
// // enter selection
// const circles = svg.selectAll("circle").data(data);
// circles
//   .enter()
//   .append("circle")
//   .attr("cx", (d, i) => i * 50 + 50)
//   .attr("cy", 200)
//   .attr("r", (d, i) => d)
//   .attr("fill", "red");

// -------------------------------------------
// // append circle
// svg
//   .append("circle")
//   .attr("cx", 100)
//   .attr("cy", 250)
//   .attr("r", 70)
//   .attr("fill", "red");

// // append line, rectangle, ellipse
// svg
//   .append("line")
//   .attr("x1", 185)
//   .attr("y1", 5)
//   .attr("x2", 230)
//   .attr("y2", 40)
//   .attr("stroke", "blue")
//   .attr("stroke-width", 5);

// svg
//   .append("rect")
//   .attr("x", 200)
//   .attr("y", 50)
//   .attr("width", 240)
//   .attr("height", 120)
//   .attr("fill", "blue");

// svg
//   .append("ellipse")
//   .attr("cx", 300)
//   .attr("cy", 300)
//   .attr("rx", 50)
//   .attr("ry", 70)
//   .attr("fill", "yellow");
