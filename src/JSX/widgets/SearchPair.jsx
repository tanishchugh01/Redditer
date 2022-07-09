import IconButton from "./IconButton";

const SearchPair = ({ textFn, clickFn, icon, buttonClass, height,iconColor="" ,iconSize=""}) => {
  const inpClass = `bg-blue-50 rounded-full h-${height} px-3 mr-1`;
// className="bg-bl"
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      clickFn();
    }
  };

  return (
    <div className="">
      <input
        onChange={textFn}
        className={inpClass}
        type="text"
        placeholder="subreddit"
        id="subredditName"
        onKeyDown={handleKeyPress}
      />
        <IconButton
          fn={clickFn}
          className={buttonClass}
          icon={icon}
          height={height}
          iconColor={iconColor}
          iconSize={iconSize}
        />
    </div>
  );
};

export default SearchPair;
