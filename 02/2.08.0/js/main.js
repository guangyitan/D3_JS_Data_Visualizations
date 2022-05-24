/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("./data/buildings.json").then(data => {
    console.log(data)
    data.forEach(element => {
        element.height = Number(element.height)        
    });

    console.log(data)

    const svg = d3.select("#chart-area").append("svg")
    .attr("width", 500)
    .attr("height", 500)

    const rectangles = svg.selectAll("rectangle").data(data)

    rectangles.enter().append('rect')
        .attr('x', (d, i) => (i *50) + 50)
        .attr('y', 10)
        .attr('width', 30)
        .attr('height', (d) => d.height)
        .attr('rx', 0)
        .attr('ry', 0)
        .style('fill', 'grey');

}).catch(error => {
    console.log(error)
})