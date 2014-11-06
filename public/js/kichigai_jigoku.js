var margin = {top: 0, right: 5, bottom: 10, left: 5};
var width = 960 - margin.left - margin.right;
var height = 840 - margin.top - margin.bottom;

var force = d3.layout.force()
  .gravity(0.1)
  .charge(function(d, i) { return d.score * -1; })
  .size([width, height]);

var color = d3.scale.category10();
var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.json('../json/kichigai_jigoku.json', function(error, data) {
    console.log(data)
    data.values.forEach(function(d) {
      d.word = String(d[0]);
      d.score = d[1];
      console.log("Score " + d.score + " on " + d.word);
    });
  force
    .nodes(data.values)
    .start();

  var node = svg.selectAll("g.node")
    .data(data.values)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(force.drag);
  node.append("circle")
    .attr("r", function(d) { return d.score * .1; })
    .attr("opacity", .67)
    .attr("fill", function(d){
      if (d.score <= 300) {
        return "#449944"
      } else if (d.score > 300 && d.score <= 500) {
        return "#33AA33"
      } else if (d.score > 500 && d.score <= 750) {
        return "#22CC22"
      } else if (d.score > 750 && d.score <= 1000) {
        return "#11DD11"
      }
    });
  node.append("text")
    .text(function(d){ return d.word; })
    .attr('fill', '#fff')
    .attr('font-size', 24)
    .attr('dx', -16)
    .attr('dy', -5);
  node.append("text")
    .text(function(d){ return d.score; })
    .attr('fill', '#fff')
    .attr('dx', -25)
    .attr('dy', 15);
  force.on("tick", function() {
    node
    .attr('transform', function(d) {
      return 'translate('+ Math.max(20, Math.min(width-20, d.x)) + ','
        + '' + Math.max(20, Math.min(height-20, d.y)) + ')'; });
  });
})
