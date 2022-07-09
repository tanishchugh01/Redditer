import { Component } from "react";
import "./loader.css"


//https://codepen.io/WithAnEs/pen/AMMqgK
class Loader extends Component  {
  componentDidMount(){
    document.querySelector('#navLogo').classList.add('animate-wiggle')
    
  }
  componentWillUnmount(){
    document.querySelector('#navLogo').classList.remove('animate-wiggle')
    
  }
  render(){return ( <div className="loader"></div> )};
}
 

export default Loader;