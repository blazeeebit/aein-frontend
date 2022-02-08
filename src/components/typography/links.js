import { Link } from "react-router-dom";

const Links = (props) => {
  return (
    <Link to={props.toRoute} className={props.linkClass}>{props.linkName}</Link>
  );
};

export default Links;
