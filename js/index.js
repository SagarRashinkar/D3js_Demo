d3.select("h1")
    .style("color", "blue")
    .attr("class", "heading");

d3.select("body")
    .append("p")
    .text("New1 Paragraph")
    .style("color", "purple");
d3.select("body")
    .append("p")
    .text("New2 Paragraph")
    .style("color", "teal");;
d3.select("body")
    .append("p")
    .text("New3 Paragraph")
    .style("color", "orange");
