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
          date="Dec 10, 2021"
          userProfilePicture="https://styles.redditmedia.com/t5_2qi1r/styles/communityIcon_2stg5hn8m5k51.png?width=256&s=e4abb6ac11d144c7fb965232592b4d42fe0e370b"
        />
      </div>
    </>
  );
};

export default Test;
