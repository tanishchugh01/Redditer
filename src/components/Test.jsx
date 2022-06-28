import { getDataThroughSubreddit } from "../API/subreddits";
import React, { Component } from "react";
import Loader from "./Loader";
import Post from "./post";

class Test extends Component {
  state = {
    postData: {},
    isReady: false,
  };

  fetchData() {
    getDataThroughSubreddit("meme", "t3_vmqh30")
      .then((result) => {
        this.setState({ postData: result });
        this.setState({ isReady: true });
        console.log(this.state.postData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.isReady) {
      return <Loader />;
    } else {
      return (
        <>
          <div className="flex flex-col justify-end">
            {this.state.postData.children.map((post) => {
              return (
                <Post
                  text={post.data.title}
                  image={post.data.url}
                  numberOfLikes={post.data.score}
                  username={post.data.author}
                  profileName="Tanish Chugh"
                  date="Jun 27, 2022"
                  userProfilePicture="https://styles.redditmedia.com/t5_if1ys/styles/profileIcon_zoi9h3atk8891.png?width=256&height=256&crop=256:256,smart&s=2c2067f9ac33e90f5ab4318af7d546322de85453"
                  key={post.data.id}
                  numberOfComments={post.data.num_comments}
                  numberOfRetweets={post.data.all_awardings.length}
                />
              );
            })}
          </div>
        </>
      );
    }
  }
}

export default Test;
