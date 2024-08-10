import styled from 'styled-components';
import theme from '../../../theme/theme';
import { FONT_SIZE } from '../../../constants';

const { COLOR } = theme;

const FamilyMember = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	border-bottom: 1px solid ${COLOR.GRAY.GRAY_200};
`;

const MemberInfo = styled.div`
	display: flex;
	align-items: center;
`;

const MemberDetails = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

const MemberName = styled.span`
	font-size: ${FONT_SIZE.LG};
	padding: 2px;
`;

const MemberRole = styled.span`
	font-size: ${FONT_SIZE.SM};
	padding: 3px;
`;

const Actions = styled.div`
	display: flex;
	gap: 10px;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		@media ${theme.WINDOW_SIZE.MOBILE} {
			width: 15px;
			height: 12px;
			font-size: 12px;
			white-space: nowrap;
		}
	}
`;

export {
	FamilyMember,
	MemberInfo,
	MemberDetails,
	MemberName,
	MemberRole,
	Actions,
};
