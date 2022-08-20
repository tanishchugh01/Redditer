import { Component } from "react";
import Reel from "./Reel";
import { useState } from "react";

class InfiniteReel extends Component {
  state = { afterArr: [null] ,showMore:true};
  tempAfter = null;
  
  readyState = false;
  changeReadyState = (val) => (this.readyState = val);

  addAnotherReel() {
    const newArr = [...this.state.afterArr];
    newArr.push(this.tempAfter);
    this.setState({ afterArr: newArr });
  }
  
  changeShowMore(booly)
  {
    this.setState({showMore:booly});
  }

  saveTempAfter(after) {
    this.tempAfter = after;
  }

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("scroll", this.scrollListen,{passive:true});
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListen);
  }

  noOfReels = 1;

  scrollListen = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledPerc = ((height - winScroll) / height) * 100;
    // console.log(scrolledPerc,this.readyState);

    if (scrolledPerc < 30 / this.noOfReels && this.readyState===true) {
      // window.removeEventListener("scroll", this.scrollListen);
      this.readyState=false;

      this.noOfReels++;
      setTimeout(() => {
        
        this.addAnotherReel();
      }, 700);

      // setTimeout(
      //   () => window.addEventListener("scroll", this.scrollListen),
      //   6000
      // );x
    }
  };

  render() {
    return (
      <div className="flex items-center w-[100%] flex-col">
        {this.state.afterArr.map((afterVal) => (
          <Reel
            readyState={this.changeReadyState}
            subReddit={this.props.subReddit}
            after={afterVal}
            saveAfter={this.saveTempAfter.bind(this)}
            key={afterVal}
            changeShowMore={this.changeShowMore.bind(this)}
          />
        ))}
{this.state.showMore?
        (<button
          className="p-5 flex text-white mt-3 text-center text-lg rounded-lg font-bold bg-twitter"
          onClick={() => {
            this.addAnotherReel();
          }}
        >
          Show More
        </button>
        ):null}
        </div>
    );
  }
}

export default InfiniteReel;
