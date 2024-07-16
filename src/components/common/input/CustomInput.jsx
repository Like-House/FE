import * as S from './CustomInput.style';

const CustomInput = ({
	name,
	type, // text, number ...
	placeholder,
	fiiled, // boolean
	size, // XS , SM, BASE, LG, XL
	disabled,
	icon,
	errors,
	success,
}) => {
	return (
		<S.Container>
			<S.InputContainer
				$size={size}
				$disabled={disabled}
				$fiiled={fiiled}
				$errors={errors}
				$success={success}
			>
				<S.Input
					type={type}
					placeholder={placeholder}
					disabled={disabled}
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
