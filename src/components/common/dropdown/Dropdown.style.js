import styled from 'styled-components';
import theme from '../../../theme/theme';

const DropdownContainer = styled.div`
	width: ${({ size }) => size};
`;
const DropdownButtonArea = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	background-color: ${theme.COLOR.COMMON.WHITE};
	padding: 12px 18px;
`;

const DropdownLabel = styled.div`
	font-size: 1rem;
	color: ${({ isSelected }) =>
		isSelected ? theme.COLOR.GRAY.GRAY_950 : theme.COLOR.GRAY.GRAY_350};
`;

const DropdownMenuArea = styled.div`
	width: 100%;
	margin-top: 20px;
	padding: 12px 18px;
	border-radius: 10px;
	background-color: ${theme.COLOR.COMMON.WHITE};
	max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
	overflow: hidden;
	transition:
		max-height 0.5s ease-out,
		opacity 0.5s ease-out;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;
const DropdownMenu = styled.div`
	margin-bottom: 22px;
	&:last-child {
		margin-bottom: 0px;
	}
	font-size: 1rem;
	color: ${theme.COLOR.GRAY.GRAY_950};
	cursor: pointer;
`;

export {
	DropdownContainer,
	DropdownButtonArea,
	DropdownMenuArea,
	DropdownMenu,
	DropdownLabel,
};
