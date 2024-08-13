import * as S from './LandingPage.style';

import LANDING from '@/assets/images/landing.webp';

const LadingPage = () => {
	return (
		<S.Container>
			<S.ContentContainer>
				<S.Content>
					<h1>
						행복한 가족생활, <br />
						이제 소통이 슬기로워집니다.
					</h1>
				</S.Content>

				<S.ContentWrapper>
					<h3>홈 / 게시글 / 가족 앨범</h3>
					<h1>
						우리 가족의 소중한 하루, <br />
						누구보다 빠르게 <br />
						확인하고 간직하기
					</h1>
					<S.ImgBox>
						<img src={LANDING} alt="" />
					</S.ImgBox>
				</S.ContentWrapper>
			</S.ContentContainer>
			<S.BackGround />
		</S.Container>
	);
};

export default LadingPage;
