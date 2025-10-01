const SvgMap = ({ children, id, className, viewBox }) => {
  return (
    <svg
      version="1.1"
      id={id}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox={viewBox}
      xmlSpace="preserve"
    >
      {children}
    </svg>
  );
};

const GroupsPath = ({ id, className, transform, title, children }) => {
  return (
    <g id={id} className={className} transform={transform} title={title}>
      {children}
    </g>
  );
};

const Paths = (props) => {
  return <path {...props} />;
};

export { SvgMap, GroupsPath, Paths };
