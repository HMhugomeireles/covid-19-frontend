import React from "react";

const Emoji = props => {
  return (
    <span role={props.role} aria-label={props.ariaLabel}>
      {props.emoji}
    </span>
  );
};

export default Emoji;
