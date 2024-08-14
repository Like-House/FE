import * as S from './InvitationLink.style';

import { CustomButton, CustomInput } from '@/components';

import useForm from '@/hooks/useForm';
import useCheckSpaceCode from '@/hooks/queries/family/useCheckSpaceCode';
import { validataCode } from '@/utils';
import errorIcon from '@/assets/images/error.png';
import successIcon from '@/assets/images/success.png';

const InvitationLink = () => {
	const codeForm = useForm({
		initialValue: {
			familySpaceCode: '',
		},
		validate: validataCode,
	});

	const { mutate } = useCheckSpaceCode();

	const handleSubmit = () => {
		mutate(codeForm.values.familySpaceCode);
	};

	const getIcon = () => {
		if (codeForm.message.errors) {
			return <S.Icon src={errorIcon} alt="Error Icon" />;
		} else if (codeForm.message.success) {
			return <S.Icon src={successIcon} alt="Success Icon" />;
		}
		return null;
	};

	return (
		<S.OuterContainer>
			<S.Container>
				<S.Title>가족 공간 입장하기</S.Title>
				<S.SubTitle>우리 가족만의 온라인 공간을 만나러 가볼까요?</S.SubTitle>
				<S.Form>
					<S.Label>초대 코드</S.Label>
					<S.InputContainer>
						<CustomInput
							{...codeForm.getTextInputProps('familySpaceCode')}
							type="text"
							placeholder="초대 코드를 입력해주세요."
							errors={
								codeForm.touched.familySpaceCode &&
								codeForm.message.errors?.familySpaceCode
							}
							success={
								codeForm.touched.familySpaceCode &&
								codeForm.message.success?.familySpaceCode
							}
							message={
								codeForm.touched.familySpaceCode &&
								codeForm.message.errors?.familySpaceCode
							}
							size="XL"
							icon={getIcon()}
						/>
					</S.InputContainer>
					<S.ButtonContainer>
						<CustomButton
							btnType="primary"
							label="초대 코드 확인"
							onClick={handleSubmit}
							width="100%"
							height="50px"
							disabled={!codeForm.message.success?.familySpaceCode}
						/>
					</S.ButtonContainer>
				</S.Form>
			</S.Container>
		</S.OuterContainer>
	);
};

export default InvitationLink;
