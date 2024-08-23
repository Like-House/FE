import { ServiceComponent } from '@/components';
import * as S from './ServiceMainPage.style';

const ServiceMainPage = () => {
	return (
		<S.Container>
			<S.ContentContainer>
				<S.Title>서비스 이용</S.Title>
				<ServiceComponent />
				<S.HelpSection>
					<S.HelpContent>
						<S.HelpTitle>도와줘요!</S.HelpTitle>
						<S.HelpExplain>가족같은 서비스 이용 전 참고해주세요.</S.HelpExplain>
					</S.HelpContent>
					<S.HelpList>
						<S.HelpMain>회원가입</S.HelpMain>
						<S.HelpItem>
							계정이 없는데 가족에게 초대 링크를 받았어요.
						</S.HelpItem>
						<S.HelpMain>서비스 이용</S.HelpMain>
						<S.HelpItem>새로운 가족 공간을 만들고 싶어요.</S.HelpItem>
						<S.HelpMain>회원가입</S.HelpMain>
						<S.HelpItem>
							계정이 없는데 가족에게 초대 링크를 받았어요.
						</S.HelpItem>
						<S.HelpMain>서비스 이용</S.HelpMain>
						<S.HelpItem>새로운 가족 공간을 만들고 싶어요.</S.HelpItem>
					</S.HelpList>
				</S.HelpSection>
			</S.ContentContainer>
		</S.Container>
	);
};

export default ServiceMainPage;
