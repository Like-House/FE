import * as S from './CreateSpace.style';

import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { CustomButton, CustomInput } from '@/components';
import linkIcon from '@/assets/images/link.png';
import { PAGE_PATH } from '@/constants';

const CreateSpace = () => {
	const { state } = useLocation();
	const nav = useNavigate();

	const handleSubmit = () => {
		nav(`${PAGE_PATH.HOME}`);
	};

	const handleClickClipBoard = async code => {
		await navigator.clipboard.writeText(code);
		toast.success('클립보드에 링크가 복사되었습니다.', { duration: 1200 });
	};

	return (
		<S.OuterContainer>
			<S.Container>
				<S.Title>가족 공간 만들기</S.Title>
				<S.SubTitle>우리 가족만의 온라인 공간을 만나러 가볼까요?</S.SubTitle>
				<S.Description>
					가족 공간이 생성되었습니다.
					<br />
					초대 코드를 전달하고, 가족들을 초대해보세요.
					<br />
					초대 코드는 7일 후 만료되고, 새로운 코드를 발급받을 수 있습니다.
				</S.Description>
				<S.Form>
					<S.Label>초대 코드</S.Label>
					<S.InputContainer>
						<CustomInput
							value={state.code}
							type="text"
							size="XL"
							icon={
								<S.Icon
									src={linkIcon}
									alt="Link Icon"
									onClick={() => handleClickClipBoard(state.code)}
								/>
							}
							disabled
						/>
					</S.InputContainer>
					<S.ButtonContainer>
						<CustomButton
							btnType="primary"
							label="가족 공간 입장"
							onClick={handleSubmit}
							width="100%"
							height="50px"
						/>
					</S.ButtonContainer>
				</S.Form>
			</S.Container>
		</S.OuterContainer>
	);
};

export default CreateSpace;
