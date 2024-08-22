import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants/size';

const { COLOR } = theme;

const Container = styled.div`
	padding: 50px;
`;

const Section = styled.div`
	margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
	font-size: ${FONT_SIZE.TWO_XL};
	margin-bottom: 30px;
`;

const FamilyList = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
`;

const EmptyMessage = styled.div`
	font-size: 16px;
	color: ${COLOR.GRAY.GRAY_500};
	margin-top: 20px;
`;

export { Container, Section, SectionTitle, FamilyList, EmptyMessage };
