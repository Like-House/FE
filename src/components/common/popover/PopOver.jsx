import React from "react";
import PropTypes from "prop-types";
import { PopOverContainer, PopOverContent } from "./PopOver.style";

const PopOver = ({
  topIcon,
  bottomIcon,
  topMessage,
  bottomMessage,
}) => {
  return (
    <PopOverContainer>
      <PopOverContent>
        <p>{topIcon}</p>
        <span>{topMessage}</span>
      </PopOverContent>
      <PopOverContent>
        <p>{bottomIcon}</p>
        <span>{bottomMessage}</span>
      </PopOverContent>
    </PopOverContainer>
  );
};

PopOver.propTypes = {
  topIcon: PropTypes.element.isRequired,
  bottomIcon: PropTypes.element.isRequired,
  topMessage: PropTypes.string.isRequired,
  bottomMessage: PropTypes.string.isRequired,
};

export default PopOver;