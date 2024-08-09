function validateSignUp(values) {
	const message = {
		errors: {
			username: '',
			email: '',
			password: '',
			passwordCheck: '',
			birthDate: '',
		},
		success: {
			username: '',
			email: '',
			password: '',
			passwordCheck: '',
			birthDate: '',
		},
	};

	if (values.username === '') {
		message.errors.username = '유저 이름을 입력하세요';
	} else {
		message.success.username = '성공';
	}

	if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(values.email)) {
		message.errors.email = '이메일 주소를 확인해주세요. :(';
	} else {
		message.success.email = '성공';
	}

	if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(values.password)) {
		message.errors.password = '대문자 / 소문자 / 특수문자 포함, 8자리 이상';
	} else {
		message.success.password = '성공';
	}

	if (values.passwordCheck !== values.password) {
		message.errors.passwordCheck = '비밀번호를 다시 확인해주세요.';
	} else if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(values.passwordCheck)
	) {
		message.errors.passwordCheck =
			'대문자 / 소문자 / 특수문자 포함, 8자리 이상';
	} else {
		message.success.passwordCheck = '성공';
	}

	if (!/^\d{4}-\d{2}-\d{2}$/.test(values.birthDate)) {
		message.errors.birthDate = 'YYYY-MM-DD 형식으로 입력해주세요.';
	} else {
		const [year, month, day] = values.birthDate.split('-').map(Number);
		if (month < 1 || month > 12) {
			message.errors.birthDate = '월은 1월 ~ 12월 사이여야 합니다.';
		} else if (day < 1 || day > 31) {
			message.errors.birthDate = '일은 1일 ~ 31일 사이여야 합니다.';
		} else {
			message.success.birthDate = '성공';
		}
	}

	return message;
}

export { validateSignUp };
