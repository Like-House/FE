import React from "react";
import PropTypes from "prop-types";
import { PopOverContainer, PopOverContent } from "./PopOver.style";

const PopOver = ({ items }) => {
  return (
    <PopOverContainer>
      {items.map((item, index) => (
        <PopOverContent key={index}>
          <p>{item.icon}</p>
          <span>{item.message}</span>
        </PopOverContent>
      ))}
    </PopOverContainer>
  );
};

PopOver.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PopOver;