import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../containers/Post";

const Comment = () => {
  let { id, subreddit } = useParams();
  const [postData, setpostData] = useState(null);
  useEffect(() => {
    axios
      .get(`/r/${subreddit}/${id}.json`)
      .then((res) => setpostData(res.data))
  }, []);
  return (
    <div className="">
      id:{id} subreddit:{subreddit}
      {postData ?function(){console.log(postData);return <Post post={postData[0].data.children[0]} />}() : null}
    </div>
  );
};

export default Comment;
