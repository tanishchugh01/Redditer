import { useParams } from "react-router-dom";

const Comment = () => {
  let { id, subreddit } = useParams();
  return (
    <div className="">
      id:{id} subreddit:{subreddit}
    </div>
  );
};

export default Comment;
