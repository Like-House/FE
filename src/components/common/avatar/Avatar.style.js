import styled, { css } from 'styled-components';
import theme from '../../../theme/theme';
import defaultAvatar from '../../../assets/images/avatar.png';
import { RESPONSIVE_SIZE } from '../../../constants';

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
  xl: css`
    width: 100px;
    height: 100px;
  `,
  '2xl': css`
    width: 120px;
    height: 120px;
  `,
  '3xl': css`
    width: 140px;
    height: 140px;
  `,
  '4xl': css`
    width: 160px;
    height: 160px;
  `,
};

const shapeStyles = (shape) => {
  if (shape === 'circle') {
    return css`
      border-radius: 50%;
    `;
  } else if (shape === 'rect') {
    return css`
      border-radius: 10%;
    `;
  }
  return null;
};

const Image = styled.img`
	${({ size }) => sizeStyles[size] || sizeStyles.md};
	${({ shape }) => shapeStyles(shape)};
	background-color: ${({ src }) =>
		src ? 'transparent' : `${theme.COLOR.GRAY.GRAY_100}`};
	background-image: ${({ src }) =>
		src ? `url(${src})` : `url(${defaultAvatar})`};
	background-repeat: no-repeat;
	background-position: center;
	object-fit: cover;
	cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

	@media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
		${sizeStyles.smd};
	}

	@media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
		${sizeStyles.sm};
	}
`;

export { Image };
