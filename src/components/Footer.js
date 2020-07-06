import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <p>
        made with <strong>{props.application}</strong> at{" "}
        <strong>{props.from}</strong> by <strong>{props.name}</strong> !
      </p>
    </div>
  );
};

export default Footer;
