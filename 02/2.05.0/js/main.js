/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 400)

svg.append("line").attr("x1", 100).attr("y1", 100).attr("x2", 200).attr("y2",200).attr("stroke", "brown")
.attr("stroke-width", 5)