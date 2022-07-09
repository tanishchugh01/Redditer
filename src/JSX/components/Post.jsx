import IconNumberPair from "../widgets/IconNumberPair";

const Post = ({
  text,
  urlForImage,
  numberOfLikes,
  username,
  profileName,
  date,
  userProfilePicture,
  numberOfComments,
  numberOfRetweets,
  textDescription,
}) => {
  username = "@" + username;

  return (
    <div className="resizeToScreen flex flex-row border hover:bg-white">
      <img
        className="w-10 h-10 m-3 rounded-full border-none"
        src={userProfilePicture}
        alt="User Profile"
      />

      <div className="flex flex-col justify-items-start mt-3">
        <div className="flex justify-between">
          <span className="text-left">
            <span className="hover:underline cursor-pointer">
              <b>{profileName}</b>
            </span>
            &nbsp;
            <span className="text-gray-700">{username}</span>
            &nbsp; <span className="hiddenInPhone">&#183;</span> &nbsp;
            <span className="text-gray-700 hover:underline cursor-pointer hiddenInPhone">
              {date}
            </span>
          </span>
          <span className="p-2 h-10 w-10 rounded-full mr-1 me-3 hoverGlow">
            <i className="bi bi-three-dots"></i>
          </span>
        </div>
        <h6 className="text-left mb-2 mt-[-5px]  mr-7">{text}</h6>
        <div className=" mr-7">
          {textDescription === "" ? (
            <img
              src={urlForImage}
              alt={username}
              className=" rounded-2xl  border "
            />
          ) : (
            <p className=" [overflow-wrap:anywhere] text-justify">
              {textDescription}
            </p>
          )}
        </div>
        <div className="flex flex-row justify-between my-1 pr-8">
          <IconNumberPair icon="chat" number={numberOfComments} />
          <IconNumberPair icon="arrow-repeat" number={numberOfRetweets} />
          <IconNumberPair icon="heart" number={numberOfLikes} />
          <IconNumberPair icon="upload" number={null} />
        </div>
      </div>
    </div>
  );
};

export default Post;
