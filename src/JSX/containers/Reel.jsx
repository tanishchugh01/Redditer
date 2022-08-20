import { getDataThroughSubreddit } from "../../API/subreddits";
import React, { Component } from "react";
import Loader from "../components/Loader";
import Post from "../components/Post";
import ErrorPage from "../components/ErrorPage";

class Reel extends Component {
  state = {
    postData: {},
  };

  isReady = false;
  subReddit = this.props.subReddit;

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    getDataThroughSubreddit(this.props.subReddit, this.props.after)
      .then((result) => {
        this.afterr = result.after;
        this.setState({ postData: result });
        this.props.saveAfter(result.after);
        // })
        // .then(()=>{
        // console.log(this.state.postData);
        this.isReady = true;
        setTimeout(() => {
          this.props.readyState(true);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        // console.log("handeled");
      });
  }

  render() {
    if (!this.isReady) {
      return <Loader />;
    }
    if (typeof this.state.postData === "number") {
      //error status code
      return <ErrorPage code={this.state.postData} />;
    }

    //else
    return (
      <>
        <article className="flex flex-col w-[100%] items-center">
          {this.state.postData.children.map((post) => {
            return <Post key={post.data.id} post={post} />;
          })}
        </article>
      </>
    );
  }
}

export default Reel;
