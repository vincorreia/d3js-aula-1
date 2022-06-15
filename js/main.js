/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("./data/buildings.json").then(data => {
    data.forEach(d => {
        d.height = Number(d.height)
    })
    console.log(data)


const svg = d3.select("#chart-area").append("svg")
    .attr("height", 400)
    .attr("width", 400)

const rects = svg.selectAll("rect")
    .data(data)

rects.enter().append("rect")
    .attr("x", (d, i) => i * 50 + 50)
    .attr("y", 20)
    .attr("height", d => d.height)
    .attr("width", 30)
    .attr("fill", "grey")
})