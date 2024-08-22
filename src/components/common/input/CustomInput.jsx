import * as S from './CustomInput.style';

const CustomInput = ({
	value,
	onChange,
	onBlur,
	type,
	placeholder,
	filled,
	size,
	disabled,
	icon,
	errors,
	success,
	message,
	maxLength,
	autoComplete,
}) => {
	return (
		<S.Container>
			<S.InputContainer
				$size={size}
				$disabled={disabled}
				$filled={filled}
				$errors={errors}
				$success={success}
			>
				<S.Input
					autoComplete={autoComplete}
					maxLength={maxLength}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					type={type}
					placeholder={placeholder}
					disabled={disabled}
					$filled={filled}
				/>
				{icon}
			</S.InputContainer>
			<S.MsgWrapper $errors={errors} $success={success}>
				{message}
			</S.MsgWrapper>
		</S.Container>
	);
};

export default CustomInput;
