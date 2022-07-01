import Reel from "./Reel";
import { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    this.tempSubReddit = "meme"
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
        <input
          onChange={this.getInput.bind(this)}
          className="bg-slate-200"
          type="text"
          placeholder="subreddit"
          id="subredditName"
        />
        <button onClick={this.submitInput.bind(this)} className="bg-lime-500 w-5 h-5" />
        <Reel subReddit={this.state.subReddit} />
      </>
    );
  }
}

export default Test;
