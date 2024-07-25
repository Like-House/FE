import styled from 'styled-components';
import theme from '../../theme/theme';

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	background-color: ${theme.COLOR.BACKGROUND};
`;

const AlertConatainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
`;

const TabBarContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 12%;
	padding: 60px 0px 10px 0px;
	gap: 200px;
	overflow-x: auto;
	white-space: nowrap;
	border-bottom: 1px solid ${theme.COLOR.GRAY.GRAY_200};
`;

const TabBarMenu = styled.div`

`;

const ContentContainer = styled.div`
	height: 88%;
	padding: 20px 40px;
	overflow-y: auto;
`;

const SideContainer = styled.div`
	width: 25%;
	background-color: rgba(0, 0, 0, 0.05);
`;

export {
	MainContainer,
	AlertConatainer,
	SideContainer,
	TabBarContainer,
	ContentContainer,
	TabBarMenu,
};
