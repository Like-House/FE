import styled from 'styled-components';
import theme from '../../../theme/theme';

const { COLOR, ALIGN } = theme;

const sizeStyles = {
	sm: '20px',
	md: '30px',
	lg: '40px',
};

const fontSizeStyles = {
	sm: '16px',
	md: '20px',
	lg: '24px',
};

const outlineBorderRadiusStyles = {
	sm: '2px',
	md: '3px',
	lg: '4px',
};

const checkBoxBorderRadiusStyles = {
	sm: '5px',
	md: '6px',
	lg: '7px',
};

const getSize = size => sizeStyles[size] || sizeStyles.md;
const getFontSize = size => fontSizeStyles[size] || fontSizeStyles.md;

const getOutlineBorderRadius = size =>
	outlineBorderRadiusStyles[size] || outlineBorderRadiusStyles.md;

const getCheckBoxBorderRadius = size =>
	checkBoxBorderRadiusStyles[size] || checkBoxBorderRadiusStyles.md;

const CheckBoxContainer = styled.div`
	display: flex;
	align-items: center;
`;

const CheckBoxOutline = styled.div`
	width: ${({ size }) => getSize(size)};
	height: ${({ size }) => getSize(size)};
	border: 1.5px solid ${COLOR.COMMON.BLACK};
	background-color: ${COLOR.COMMON.WHITE};
	border-radius: ${({ size }) => getOutlineBorderRadius(size)};
	${ALIGN.ROW_CENTER}
`;

const CheckBoxWithBackground = styled.div`
	width: ${({ size }) => getSize(size)};
	height: ${({ size }) => getSize(size)};
	border: 2px solid ${COLOR.GRAY.GRAY_200};
	border-radius: ${({ size }) => getCheckBoxBorderRadius(size)};
	background-color: ${({ checked }) =>
		checked ? COLOR.YELLOW.YELLOW_500 : COLOR.GRAY.GRAY_100};
	${ALIGN.ROW_CENTER}
`;

const CheckMark = styled.img`
	width: ${({ size }) => (size === 'sm' ? '10px' : '15px')};
	height: ${({ size }) => (size === 'sm' ? '8px' : '12px')};
`;

const CheckBoxLabel = styled.label`
	font-size: ${({ hasLabel, size }) => (hasLabel ? getFontSize(size) : '24px')};
	margin-left: 10px;
`;

const CheckBoxLabelBold = styled.span`
	font-size: 20px;
	color: ${COLOR.MAIN.YELLOW};
	font-weight: bold;
`;

const CheckBoxLabelNormal = styled.span`
	font-size: ${({ hasLabel, size }) => (hasLabel ? getFontSize(size) : '24px')};
	color: ${COLOR.GRAY.GRAY_900};
`;

export {
	CheckBoxContainer,
	CheckBoxOutline,
	CheckBoxWithBackground,
	CheckMark,
	CheckBoxLabel,
	CheckBoxLabelBold,
	CheckBoxLabelNormal,
};
