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

export default PopOver;
