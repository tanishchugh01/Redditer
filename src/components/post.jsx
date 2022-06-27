import LikeShareIcon from "../widgets/likeShareIcon";

const Post = ({
  text,
  image,
  numberOfLikes,
  username,
  profileName,
  date,
  userProfilePicture,
}) => {
  username = "@" + username;
  return (
    <div className="max-w-[37rem] flex flex-row border hover:bg-gray-100">
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
            <span className="text-gray-700 ">{username}</span>
            &nbsp; &#183; &nbsp;
            <span className="text-gray-700 hover:underline cursor-pointer">
              {date}
            </span>
          </span>
          <span className=" justify-self-end align p-2 h-10 w-10 rounded-full mr-1 me-3 hover:bg-green-100">
            <i class="bi bi-three-dots"></i>
          </span>
        </div>
        <h6 className="text-left mb-2 mt-[-5px]">{text}</h6>
        <img src={image} alt={image} className=" mr-7 rounded-2xl  border " />
        <div className="flex flex-row justify-between my-1 pr-8">
          <LikeShareIcon icon="chat" number={10} />
          <LikeShareIcon icon="arrow-repeat" number={15} />
          <LikeShareIcon icon="heart" number={109} />
          <LikeShareIcon icon="upload" number={null} />
          
        </div>
      </div>
    </div>
  );
};

export default Post;
