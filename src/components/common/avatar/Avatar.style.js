import styled, { css } from 'styled-components';

const sizeStyles = {
	sm: css`
		width: 40px;
		height: 40px;
	`,
	md: css`
		width: 60px;
		height: 60px;
	`,
	lg: css`
		width: 80px;
		height: 80px;
	`,
};

const shapeStyles = shape => {
	if (shape === 'circle') {
		return css`
			border-radius: 50%;
		`;
	} else if (shape === 'rect') {
		return css`
			border-radius: 0;
		`;
	}
	return null;
};

const Image = styled.img`
	${({ size }) => sizeStyles[size] || sizeStyles.md};
	${({ shape }) => shapeStyles(shape)}
	object-fit: cover;
`;

export { Image };
