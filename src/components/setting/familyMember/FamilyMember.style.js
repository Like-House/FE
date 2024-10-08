import styled from 'styled-components';
import theme from '@/theme/theme';
import { FONT_SIZE } from '@/constants';

const { COLOR } = theme;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
`;

const FamilyMember = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 10px;
	background-color: ${COLOR.COMMON.WHITE};
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);

	@media ${theme.WINDOW_SIZE.MOBILE} {
		padding: 15px;
	}
`;

const MemberInfoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	position: relative;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		flex-direction: row;
		align-items: center;
	}
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

const MemberNameRole = styled.div`
	display: flex;
	flex-direction: column;
`;

const MemberName = styled.span`
	font-size: ${FONT_SIZE.LG};
	padding: 2px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.BASE};
	}
`;

const MemberRole = styled.span`
	font-size: ${FONT_SIZE.SM};
	padding: 3px;
	margin-bottom: 9px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.SM};
		margin-bottom: 5px;
	}
`;

const MemberDescription = styled.span`
	font-size: ${FONT_SIZE.BASE};
	padding: 3px;
	margin-left: 80px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.SM};
	}
`;

const HostTag = styled.span`
	font-size: ${FONT_SIZE.BASE};
	color: ${COLOR.YELLOW.YELLOW_500};
	margin-left: 20px;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		font-size: ${FONT_SIZE.SM};
		margin-left: 10px;
	}
`;

const AvatarWrapper = styled.div`
	position: relative;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		& > img {
			width: 60px;
			height: 60px;
		}
	}
`;

const EditIcon = styled.div`
	position: absolute;
	cursor: pointer;
	display: none;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: block;
		bottom: 0px;
		left: 40px;

		img {
			width: 30px;
			height: 30px;
		}
	}
`;

const CustomButtonWrapper = styled.div`
	display: block;

	@media ${theme.WINDOW_SIZE.MOBILE} {
		display: ${({ $isCurrentUser }) => ($isCurrentUser ? 'none' : 'block')};
	}
`;

export {
	Container,
	FamilyMember,
	MemberInfoWrapper,
	AvatarWrapper,
	MemberName,
	MemberInfo,
	MemberNameRole,
	MemberDescription,
	MemberDetails,
	MemberRole,
	HostTag,
	EditIcon,
	CustomButtonWrapper,
};
