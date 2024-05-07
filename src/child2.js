// child1.js
import React, { Component } from "react";
import * as d3 from 'd3';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.data1);
  }
  componentDidUpdate() {
    console.log("component did update", this.props.data1);

    var data = this.props.data1;

    var margin = { top: 10, right: 10, bottom: 30, left: 20 },
      w = 500 - margin.left + margin.right,
      h = 300 - margin.top - margin.bottom;

    var container = d3.select(".child2_svg")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom)
      .select(".g_1")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // // X axis
    // var x_data = data.map(item => item.x);
    // const x_scale = d3.scaleBand().domain(x_data.map(d => d.toString())).range([margin.left, w]).padding(0.1);
    // container.selectAll(".x_axis_g").data([0]).join('g').attr("class", 'x_axis_g')
    //   .attr("transform", `translate(0, ${h})`).call(d3.axisBottom(x_scale));

    // var y_data = data.map(item => item.y)
    // const y_scale = d3.scaleLinear().domain([0, d3.max(y_data)]).range([h, 0]);
    // container.selectAll(".y_axis").data([0]).join('g').attr("class", "x_axis_g")
    //   .attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y_scale));


    // container.selectAll("rect")
    //   .data(data)
    //   .join("rect")
    //   .attr("x", function (d) {
    //     return x_scale(d.x.toString());
    //   })
    //   .attr("y", function (d) {
    //     return y_scale(d.y);
    //   })
    //   .attr("width", x_scale.bandwidth())
    //   .attr("height", function (d) {
    //     return h - y_scale(d.y);
    //   })
    //   .style("fill", "#69b3a2")

  }


  render() {
    return <svg className="child2_svg">
      <g className="g_1"></g>
    </svg>
  }
};

export default BarChart;
