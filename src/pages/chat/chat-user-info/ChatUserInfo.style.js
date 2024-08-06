import styled from 'styled-components';
import { FONT_SIZE } from '../../../constants';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 50px 70px;

	h1 {
		font-weight: 400;
		font-size: ${FONT_SIZE.TWO_XL};
	}
`;

const MemberWrapper = styled.div`
	margin-top: 50px;
`;

export { Container, MemberWrapper };
