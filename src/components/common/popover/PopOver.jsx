import * as S from './PopOver.style';

const PopOver = ({ items, onMouseLeave }) => {
	return (
		<S.PopOverContainer  onMouseLeave={onMouseLeave}>
			{items.map((item, index) => (
				<S.PopOverContent key={index} onClick={item.onClick}>
					<p>{item.icon}</p>
					<span>{item.message}</span>
				</S.PopOverContent>
			))}
		</S.PopOverContainer>
	);
};

export default PopOver;
