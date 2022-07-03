import IconButton from "./IconButton";

const SearchPair = ({ textFn, clickFn, icon, buttonClass, height }) => {
  const inpClass = `bg-slate-200 rounded-full h-${height} px-3 mr-1`;

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
        />
    </div>
  );
};

export default SearchPair;
