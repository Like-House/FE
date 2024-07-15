import * as S from './CustomInput.style';

const CustomInput = ({
	name,
	type,
	placeholder,
	fiiled,
	width,
	height,
	disabled,
	icon,
	errors,
	success,
}) => {
	return (
		<S.Container>
			<S.InputContainer
				$disabled={disabled}
				$fiiled={fiiled}
				$errors={errors}
				$success={success}
			>
				<S.Input
					type={type}
					placeholder={placeholder}
					disabled={disabled}
					$width={width}
					$height={height}
					$fiiled={fiiled}
				/>
				{icon}
			</S.InputContainer>
			<S.MsgWrapper $errors={errors} $success={success}>
				{errors && errors[name]?.message}
				{success && success[name]?.message}
			</S.MsgWrapper>
		</S.Container>
	);
};

export default CustomInput;
