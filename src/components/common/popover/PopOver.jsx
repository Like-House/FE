import PropTypes from "prop-types";
import * as S from "./PopOver.style";

const PopOver = ({ items, onMouseLeave }) => {

  return (
    <S.PopOverContainer onMouseLeave={onMouseLeave}>
      {items.map((item, index) => (
        <S.PopOverContent key={index} onClick={item.onClick}>
          <p>{item.icon}</p>
          <span>{item.message}</span>
        </S.PopOverContent>
      ))}
    </S.PopOverContainer>
  );
};

PopOver.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      message: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ).isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default PopOver;