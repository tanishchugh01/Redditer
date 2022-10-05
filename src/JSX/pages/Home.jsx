import { Component } from "react";
import Navibar from "../components/Navibar";
import InfiniteReel from "../containers/InfiniteReel";

class Home extends Component {
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
        <Navibar
          inputTextFn={this.getInput.bind(this)}
          inputClickFn={this.submitInput.bind(this)}
        />

        <InfiniteReel
          subReddit={this.state.subReddit}
          key={this.state.subReddit}
        />
      </>
    );
  }
}

export default Home;
