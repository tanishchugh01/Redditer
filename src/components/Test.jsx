import { getDataThroughSubreddit } from "../API/subreddits";
import React, { Component } from "react";
import Loader from "./Loader";
import Post from "./post";

class Test extends Component {
  state = {
    postData: {},
    isReady: false,
  };

  changeDateFormat(dateNum) {
    const myDate = new Date(dateNum * 1000);
    const year = myDate.getFullYear();
    var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = monthList[myDate.getMonth()];
    const date = myDate.getDate();

    return `${date} ${month}, ${year}`;
  }

  fetchData() {
    getDataThroughSubreddit("meme", null)
      .then((result) => {
        this.setState({ postData: result });
        this.setState({ isReady: true });
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    componentDidMount() {
      this.fetchData();
      console.log(this.state.postData);
  }

  render() {
    if (!this.state.isReady) {
      return <Loader />;
    } else {
      return (
        <>
          <div className="flex flex-col w-[100%] items-center">
            {this.state.postData.children.map((post) => {
              if (post.data.selftext === "") {
                return (
                  <Post
                    text={post.data.title}
                    image={post.data.url}
                    numberOfLikes={post.data.score}
                    username={post.data.author}
                    profileName={post.data.author_fullname}
                    date={this.changeDateFormat(post.data.created)}
                    userProfilePicture="https://styles.redditmedia.com/t5_2qi1r/styles/communityIcon_2stg5hn8m5k51.png?width=256&s=e4abb6ac11d144c7fb965232592b4d42fe0e370b"
                    key={post.data.id}
                    numberOfComments={post.data.num_comments}
                    numberOfRetweets={post.data.all_awardings.length}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </>
      );
    }
  }
}

export default Test;
