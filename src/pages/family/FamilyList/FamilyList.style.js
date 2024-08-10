import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const Container = styled.div`
	padding: 50px;
	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 20px;
	}
`;

const Section = styled.div`
	display: flex;
	gap: 10px;
`;

const SectionTitle = styled.h2`
	font-size: ${FONT_SIZE.TWO_XL};
	margin-bottom: 40px;
`;

const MemberCount = styled.div`
	font-size: ${FONT_SIZE.XL};
	margin-top: 3px;
`;

const FamilyList = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
`;

export { Container, Section, SectionTitle, MemberCount, FamilyList };
