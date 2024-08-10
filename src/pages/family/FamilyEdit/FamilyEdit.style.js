import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const { COLOR } = theme;

const Container = styled.div`
	padding: 50px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		margin-top: 30px;
		padding: 20px;
	}
`;

const SectionTitle = styled.h2`
	font-size: ${FONT_SIZE.TWO_XL};
	margin-bottom: 40px;
`;

const EditContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	input {
		//적용이 안됨 ㅠㅠ
		width: 100%;
		@media ${theme.WINDOW_SIZE.MOBILE} {
			width: 55%;
		}
	}
`;

const EditProfile = styled.div`
	display: flex;
	gap: 30px;
	margin-top: 30px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		img {
			width: 60px;
			height: 60px;
		}
	}
`;

const EditContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const EditName = styled.div`
	font-size: ${FONT_SIZE.TWO_XL};
	font-weight: bold;
	margin-top: 10px;
`;

const EditRole = styled.div`
	font-size: ${FONT_SIZE.BASE};
	color: ${COLOR.GRAY.GRAY_700};
`;

const CustomQuery = styled.div`
	font-size: ${FONT_SIZE.BASE};
	margin-top: 50px;
	margin-bottom: 5px;
	color: ${COLOR.GRAY.GRAY_700};
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-top: 180px;
`;

export {
	Container,
	SectionTitle,
	EditContainer,
	EditProfile,
	EditContent,
	EditName,
	EditRole,
	CustomQuery,
	ButtonContainer,
};
