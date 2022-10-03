const IconNumberPair = ({ icon,funtionality=()=>null, number }) => {
  var iconClass = `bi bi-${icon} hoverGlow rounded-full h-8 w-8 flex justify-center items-center`;
  return (
    <div className="flex flex-row gap-2">
      <i className={iconClass} onClick={funtionality}></i>
      {number === null ? <></> : <p className="flex items-center">{number}</p>}
    </div>
  );
};

export default IconNumberPair;
