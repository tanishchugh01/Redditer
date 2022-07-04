const IconButton = ({ icon, fn, className, height }) => {
  const iconClass = `bi bi-${icon} aspect-square`;

  className = `${className} p-2 rounded-md h-${height} w-${height} inline-flex items-center justify-center`;
  return (
    <button onClick={fn} className={className}>
      <i className={iconClass + " text-white"}></i>
    </button>
  );
};

export default IconButton;
// className="aspect-square fill"
