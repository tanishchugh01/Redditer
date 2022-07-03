import Reel from "./Reel";
import { Component } from "react";
import SearchPair from "../widgets/SearchPair";

class Test extends Component {
  constructor() {
    super();
    this.tempSubReddit = "meme";
    this.state = { subReddit: "meme" };
  }

  getInput(event) {
    // console.log(event.target.value,this.tempSubReddit);
    this.tempSubReddit = event.target.value;
  }

  submitInput() {
    this.setState({ subReddit: this.tempSubReddit });
  }

  render() {
    console.log(this.tempSubReddit);
    return (
      <>
        <SearchPair
          textFn={this.getInput.bind(this)}
          clickFn={this.submitInput.bind(this)}
          icon="search"
          buttonClass=" bg-gradient-to-br from-twitter to-reddit"
          className="  bg-twitter/70"
          height={8}
        />

        <Reel subReddit={this.state.subReddit} />
      </>
    );
  }
}

export default Test;
