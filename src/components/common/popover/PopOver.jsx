import PropTypes from 'prop-types';
import * as S from './PopOver.style';

const PopOver = ({ items }) => {
	return (
		<S.PopOverContainer>
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
		}),
	).isRequired,
};

export default PopOver;
