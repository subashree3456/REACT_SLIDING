import React , { Component } from 'react';
import Slider from './components/Slider';
import "./App.css";
import Data from './components/Sliderdata';
import Intro from './components/Intro';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        currentIndex : 0
    }
}
componentDidMount(){
    this.timer = setInterval(() => this.moveSlide(),5000)
}
// oru oru 5 sec kkum movesilde function execute aagum
moveSlide(){
    if(this.state.currentIndex === Data.length-1){
        this.setState({
            currentIndex : 0
        })
    } else {
        this.setState({
            currentIndex : this.state.currentIndex+1
        })
    }
}
  render(){
    return (
      <div className = "App">
          <div className = "slider-container">
              <Slider currentIndex = {this.state.currentIndex}/>
          </div>
          <div className = "intro">
          <Intro />
          </div>
      </div>
  )
}
}