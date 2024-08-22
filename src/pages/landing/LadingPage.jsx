import * as S from './LandingPage.style';

import LANDING from '@/assets/images/landing.webp';
import LANDING2 from '@/assets/images/landing2.webp';
import { ServiceComponent } from '@/components';
import Animation from '@/components/animation/Animation';

const LadingPage = () => {
	return (
		<S.Container>
			<S.ContentContainer>
				<Animation>
					<S.Content>
						<h1>
							행복한 가족생활, <br />
							이제 소통이 슬기로워집니다.
						</h1>
					</S.Content>
				</Animation>

				<Animation>
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
				</Animation>
				<Animation>
					<S.ContentWrapper>
						<h3>일정 공유</h3>
						<h1>
							우리 가족과의 소중한 시간을 <br />
							놓치지 않게 관리하기
						</h1>
						<S.BrBox />
						<h3>가족 채팅</h3>
						<h1>
							화목한 가족으로의 첫 걸음,
							<br /> 대화로 먼저 시작하세요.
						</h1>
						<S.ImgBox>
							<img src={LANDING2} alt="" />
						</S.ImgBox>
					</S.ContentWrapper>
				</Animation>

				<Animation>
					<S.ContentWrapper2>
						<ServiceComponent />
					</S.ContentWrapper2>
				</Animation>
			</S.ContentContainer>

			<S.BackGround />
			<S.BackGround2 />
			<S.BackGround3 />
		</S.Container>
	);
};

export default LadingPage;
