import LikeShareIcon from "../widgets/likeShareIcon";

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
  textDescription
}) => {
  username = "@" + username;
  // function checkImage(url) {
  //   // console.log(url);
  //   var arr = ["jpeg", "jpg", "gif", "png"];
  //   var ext =  url.substr(url.lastIndexOf(".") + 1,url.length);
  //   // console.log(ext)
  //   if (arr.includes(ext)) {
  //     console.log("do");
  //     return true;
  //   }
  //   return false;
  // }
  return (
    <div className="resizeToScreen flex flex-row border hover:bg-gray-100">
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
            <i class="bi bi-three-dots"></i>
          </span>
        </div>
        <h6 className="text-left mb-2 mt-[-5px]  mr-7">{text}</h6>
        <div className=" mr-7">
          {textDescription==="" ? (
            <img
              src={urlForImage}
              alt={username}
              className=" rounded-2xl  border "
            />
          ) : (
            <p className="text-clip overflow-hidden text-justify">{textDescription}</p>
          )}
        </div>
        <div className="flex flex-row justify-between my-1 pr-8">
          <LikeShareIcon icon="chat" number={numberOfComments} />
          <LikeShareIcon icon="arrow-repeat" number={numberOfRetweets} />
          <LikeShareIcon icon="heart" number={numberOfLikes} />
          <LikeShareIcon icon="upload" number={null} />
        </div>
      </div>
    </div>
  );
};

export default Post;
