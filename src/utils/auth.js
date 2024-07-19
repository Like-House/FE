function validateSignUp(values) {
	const message = {
		errors: {
			username: '',
			email: '',
			password: '',
		},
		success: {
			username: '',
			email: '',
			password: '',
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
		message.success.username = '성공';
	}
	return message;
}

export { validateSignUp };
