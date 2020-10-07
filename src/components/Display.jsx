import React from "react";

import "./Display.css";

export default (props) => {
  return <label className="display">{props.value}</label>;
};
