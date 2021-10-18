import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry, faFlushed } from "@fortawesome/free-solid-svg-icons";
import "./Icon.css";
const { useState } = require("react");

<i className="far fa-angry"></i>;

const Icon = () => {
  const [selected, setSelected] = useState("true");
  const [icon, setIcon] = useState(faAngry);

  function actionOnClick() {
    setSelected(!selected);
    setIcon(selected === false ? faFlushed : faAngry);
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      selected={selected}
      className="icona"
      onClick={actionOnClick}
    />
  );
};

export default Icon;
