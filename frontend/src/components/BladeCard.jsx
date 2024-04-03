import { React } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// import EditAndDelete from "./EditAndDelete";

export default function BladeCard() {
  const { id } = useParams();
  console.info("hello", { id });
  return (
    <div className="descriptionContainer">
      <p>{id}</p>
      {/* <img src={blade.picture} alt={blade.name} />
      <h2>{blade.name}</h2>
      <p>{blade.origin}</p>
      <p>111111</p> */}
      {/* <EditAndDelete /> */}
    </div>
  );
}

BladeCard.propTypes = {
  blade: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
  }).isRequired,
};
