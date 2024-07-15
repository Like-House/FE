import styled from 'styled-components';

const Image = styled.img`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	border-radius: 50%;
	object-fit: cover;
`;

export { Image };
