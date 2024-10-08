import styled from 'styled-components';

import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const YourMessageContainer = styled.div`
	margin: 7px 0;
	p {
		font-size: ${FONT_SIZE.SM};
		margin-left: 10px;
	}
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

const YourMessage = styled.div`
	background-color: ${theme.COLOR.GRAY.GRAY_0};
	max-width: 200px;
	width: fit-content;
	border-radius: 18px;
	padding: 10px 15px;
	word-break: break-word;
	overflow-wrap: break-word;
`;

const Emoticon = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 10px;
	object-fit: cover;
`;

export { Profile, YourMessage, YourMessageContainer, Emoticon };
