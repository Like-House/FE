import * as S from './NewPopover.style';

const NewPopover = ({
	showMenu,
	children,
	items,
	onMouseLeave,
	position = 'bottom',
}) => {
	return (
		<S.Container>
			<S.Wrapper>
				{children}
				<S.PopOverContainer
					$position={position}
					$showMenu={showMenu}
					onMouseLeave={onMouseLeave}
				>
					{items.map((item, index) => (
						<S.PopOverContent key={index} onClick={item.onClick}>
							<p>{item.icon}</p>
							<span>{item.message}</span>
						</S.PopOverContent>
					))}
				</S.PopOverContainer>
			</S.Wrapper>
		</S.Container>
	);
};

export default NewPopover;
