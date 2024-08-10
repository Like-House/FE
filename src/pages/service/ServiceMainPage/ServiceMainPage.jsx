import * as S from './ServiceMainPage.style';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CustomButton, Alert } from '@/components';
import { PAGE_PATH } from '@/constants/path';
import useCreateFamilyspace from '@/hooks/queries/family/useCreateFamilyspace';

const ServiceMainPage = () => {
	const navigate = useNavigate();
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [isNoFamilySpace, setIsNoFamilySpace] = useState(false);
	const { mutate } = useCreateFamilyspace();

	const handleInvitationLinkClick = () => {
		const hasFamilySpace = true;
		if (!hasFamilySpace) {
			setIsNoFamilySpace(true);
		} else {
			navigate(`/${PAGE_PATH.SERVICE}/${PAGE_PATH.SERVICE_INVITATION_LINK}`);
		}
	};

	const handleCreateSpaceClick = () => {
		mutate();
	};

	const handleSignupClick = () => {
		navigate(`/${PAGE_PATH.SIGN_UP}`);
	};

	const handleConfirm = () => {
		setIsAlertOpen(false);
	};

	const handleCancel = () => {
		setIsAlertOpen(false);
		setIsNoFamilySpace(false);
	};

	return (
		<S.Container>
			<S.Title>서비스 이용</S.Title>
			<S.Content>
				<S.InviteSection>
					<S.InviteTitle>가족에게 초대링크를 받았어요!</S.InviteTitle>
					<S.Card bgColor={S.BgColor.YELLOW}>
						<S.PictureContainer>
							<S.Picture
								src="/src/assets/images/InvitationLink.png"
								alt="Invitation Link"
							/>
						</S.PictureContainer>
						<S.CardContent>
							<S.CardTitle>
								초대 받은 가족 공간
								<br />
								들어가기
							</S.CardTitle>
							<S.Button bgColor={S.BgColor.YELLOW}>
								<CustomButton
									btnType="primary"
									label="초대링크 입력"
									icon={<AiOutlineArrowRight />}
									onClick={handleInvitationLinkClick}
								/>
							</S.Button>
						</S.CardContent>
					</S.Card>
				</S.InviteSection>
				<S.CreateSection>
					<S.CreateTitle>새로운 가족 공간을 만들고 싶어요.</S.CreateTitle>
					<S.Card bgColor={S.BgColor.WHITE}>
						<S.PictureContainer>
							<S.Picture
								src="/src/assets/images/CreateSpace.png"
								alt="Create Space"
							/>
						</S.PictureContainer>
						<S.CardContent>
							<S.CardTitle>
								새로운 가족 공간
								<br />
								만들기
							</S.CardTitle>
							<S.Button bgColor={S.BgColor.WHITE}>
								<CustomButton
									btnType="primary"
									label="가족 공간 만들기"
									icon={<AiOutlineArrowRight />}
									onClick={handleCreateSpaceClick}
								/>
							</S.Button>
						</S.CardContent>
					</S.Card>
				</S.CreateSection>
			</S.Content>
			<S.SubContent>
				<S.SubTitle>아직 계정이 없어요!</S.SubTitle>
				<S.Button bgColor={S.BgColor.YELLOW}>
					<CustomButton
						btnType="primary"
						label="회원가입 하러가기"
						onClick={handleSignupClick}
					/>
				</S.Button>
			</S.SubContent>
			<S.HelpSection>
				<S.HelpContent>
					<S.HelpTitle>도와줘요!</S.HelpTitle>
					<S.HelpExplain>가족같은 서비스 이용 전 참고해주세요.</S.HelpExplain>
				</S.HelpContent>
				<S.HelpList>
					<S.HelpMain>회원가입</S.HelpMain>
					<S.HelpItem>계정이 없는데 가족에게 초대 링크를 받았어요.</S.HelpItem>
					<S.HelpMain>서비스 이용</S.HelpMain>
					<S.HelpItem>새로운 가족 공간을 만들고 싶어요.</S.HelpItem>
					<S.HelpMain>회원가입</S.HelpMain>
					<S.HelpItem>계정이 없는데 가족에게 초대 링크를 받았어요.</S.HelpItem>
					<S.HelpMain>서비스 이용</S.HelpMain>
					<S.HelpItem>새로운 가족 공간을 만들고 싶어요.</S.HelpItem>
				</S.HelpList>
			</S.HelpSection>
			<Alert
				message="이미 초대된 가족 공간으로 이동합니다."
				onConfirm={handleConfirm}
				onCancel={handleCancel}
				isOpen={isAlertOpen}
			/>
			<Alert
				message="이용 가능한 가족 공간이 없습니다."
				detailMessage="다른 가족에게 공간을 초대 받거나, 다른 가족들을 초대할 수 있는 공간을 만들고 가족 공간에서 추억을 쌓아보세요."
				onConfirm={handleCancel}
				isOpen={isNoFamilySpace}
			/>
		</S.Container>
	);
};

export default ServiceMainPage;
