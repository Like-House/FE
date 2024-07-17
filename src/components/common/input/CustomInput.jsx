import * as S from './CustomInput.style';

const CustomInput = ({
	value,
	onChange,
	onBlur,
	name,
	type, // text, number ...
	placeholder,
	filled, // boolean
	size, // XS , SM, BASE, LG, XL
	disabled,
	icon,
	errors,
	success,
	message,
	touched,
}) => {
	return (
		<S.Container>
			<S.InputContainer
				$size={size}
				$disabled={disabled}
				$filled={filled}
				$errors={errors || (touched && message?.errors[name])}
				$success={success || (touched && message?.success[name])}
			>
				<S.Input
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
			{touched && (
				<S.MsgWrapper
					$errors={message.errors[name]}
					$success={message.success[name]}
				>
					{message.success[name]}
					{message.errors[name]}
				</S.MsgWrapper>
			)}
		</S.Container>
	);
};

export default CustomInput;
