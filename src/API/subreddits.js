import axios from "axios";

export async function getDataThroughSubreddit(subreddit, after) {
  try {
    const rawData = await axios({
      method: "get",
      url: `/r/${subreddit}.json?after=${after}`,
    });

    return rawData.data.data;
    
  } catch (err) {
    console.log(err);
    return err.response.status;
  }
}
