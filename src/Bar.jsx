const Bar = ({ height, width, val }) => {
  return (
    <div
      className="array--bar"
      style={{
        minHeight: `${height}%`,
        minWidth: `calc(${width}% - 1px)`,
        textAlign: 'center',
      }}
    ></div>
  );
};

export default Bar;
