import React,{Component} from "react";
import "./App.css"
import BarChart from "./child1";
import LineChart from "./child2";
import * as d3 from 'd3';
import sds from './data/SampleDataset.csv'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
  }
  componentDidMount(){
    var self = this
    d3.csv(sds, function(d){
      return{
        x:parseInt(d.x),
        y:parseInt(d.y),
        category:d.category
      }
    }).then(function(csv_data){
      self.setState({data:csv_data})
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render() {
    return <div className="parent">
        <div className="BarChart"><BarChart data1={this.state.data}></BarChart></div>
        <div className="LineChart"><LineChart data2={this.state.data}></LineChart></div>
      </div>
  }
}

export default App