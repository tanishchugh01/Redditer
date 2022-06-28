import axios from "axios";

export async function getDataThroughSubreddit(subreddit, after) {
  try {
    const rawData = await axios({
      method: "get",
      url: `/r/${subreddit}.json?after=${after}`,
      // after=t3_vmjoj6
    });

    // console.log(data);
    return rawData.data.data;
  } catch (err) {
    console.log(err);
  }
}
