function validataCode(values) {
	const message = {
		errors: {
			familySpaceCode: '',
		},
		success: {
			familySpaceCode: '',
		},
	};

	if (!/^[a-zA-Z0-9]{8,12}$/.test(values.familySpaceCode)) {
		message.errors.familySpaceCode =
			'코드의 길이는 8~12글자이고, 숫자와 알파벳으로 이루어져야 합니다.';
	} else {
		message.success.familySpaceCode = '성공';
	}

	return message;
}

export { validataCode };
