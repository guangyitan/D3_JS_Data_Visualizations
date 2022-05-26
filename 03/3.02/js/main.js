/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.2 - Linear scales
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)

d3.json("data/buildings.json").then(data => {
  data.forEach(d => {
    d.height = Number(d.height)
  })

  const y = d3.scaleLinear()
    .domain([0, 828]) // eg: building heights, 828 because max height is 828
    .range([0, 400]) // eg: screen pixels, 400 because max screen height pixels is 400

  const rects = svg.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", 0)
    .attr("x", (d, i) => (i * 60))
    .attr("width", 40)
    .attr("height", d => y(d.height))  // to revert back use y.invert(value)
    .attr("fill", "grey")
})