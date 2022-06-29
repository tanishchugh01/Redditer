const LikeShareIcon = ({ icon, number }) => {
  var iconClass = `bi bi-${icon} hoverGlow rounded-full h-8 w-8 flex justify-center items-center`;
  return (
    <div className="flex flex-row gap-2">
      <i class={iconClass}></i>
      {number === null ? <></> : <p className="flex items-center">{number}</p>}
    </div>
  );
};

export default LikeShareIcon;
