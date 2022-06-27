import Post from "./post";

const Test = () => {
  return (
    <>
      <div className="flex justify-center">
        <Post
          text="Welcome to Redditer"
          image="https://i.redd.it/zouc4qzcs1091.jpg"
          numberOfLikes={10}
          username="tanishchugh01"
          profileName="Tanish Chugh"
          date="Jun 27, 2022"
          userProfilePicture="https://styles.redditmedia.com/t5_if1ys/styles/profileIcon_zoi9h3atk8891.png?width=256&height=256&crop=256:256,smart&s=2c2067f9ac33e90f5ab4318af7d546322de85453"
        />
      </div>
    </>
  );
};

export default Test;
