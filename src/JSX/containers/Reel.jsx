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

  changeDateFormat(dateNum) {
    const myDate = new Date(dateNum * 1000);
    const year = myDate.getFullYear();
    var monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthList[myDate.getMonth()];
    const date = myDate.getDate();

    return `${date} ${month}, ${year}`;
  }

  async fetchData() {
    getDataThroughSubreddit(this.props.subReddit, this.props.after)
      .then((result) => {
        this.setState({ postData: result });
        this.props.saveAfter(result.after);
        this.isReady = true;
        console.log(this.state.postData);
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
            return (
              <Post
                text={post.data.title}
                urlForImage={post.data.url}
                numberOfLikes={post.data.score}
                username={post.data.author}
                profileName={post.data.author_fullname}
                date={this.changeDateFormat(post.data.created)}
                userProfilePicture="https://styles.redditmedia.com/t5_2qi1r/styles/communityIcon_2stg5hn8m5k51.png?width=256&s=e4abb6ac11d144c7fb965232592b4d42fe0e370b"
                key={post.data.id}
                numberOfComments={post.data.num_comments}
                numberOfRetweets={post.data.all_awardings.length}
                textDescription={post.data.selftext}
              />
            );
          })}
        </article>
      </>
    );
  }
}

export default Reel;
