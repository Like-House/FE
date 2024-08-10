import { useEffect, useState } from 'react';

function useForm({ initialValue, validate }) {
	const [values, setValues] = useState(initialValue);
	const [touched, setTouched] = useState({});
	const [message, setMessage] = useState({});

	const handleChangeText = (name, text) => {
		setValues({ ...values, [name]: text });
	};

	const handleBlur = name => {
		setTouched({
			...touched,
			[name]: true,
		});
	};

	const getTextInputProps = name => {
		const value = values[name];
		const onChange = event => handleChangeText(name, event.target.value.trim());
		const onBlur = () => handleBlur(name);
		return { value, onChange, onBlur };
	};

	const handleBirthDate = (name, text) => {
		text = text.replace(/[^\d-]/g, '');

		if (text.length > 4 && text[4] !== '-') {
			text = text.slice(0, 4) + '-' + text.slice(4);
		}
		if (text.length > 7 && text[7] !== '-') {
			text = text.slice(0, 7) + '-' + text.slice(7);
		}
		if (text.length > 10) {
			text = text.slice(0, 10);
		}
		setValues({ ...values, [name]: text });
	};

	const getBirthDateInputProps = name => {
		const value = values[name];
		const onChange = event => handleBirthDate(name, event.target.value);
		const onBlur = () => handleBlur(name);
		return { value, onChange, onBlur };
	};

	useEffect(() => {
		if (validate) {
			const message = validate(values);
			setMessage(message);
		}
	}, [validate, values]);

	return {
		getTextInputProps,
		touched,
		values,
		message,
		setTouched,
		getBirthDateInputProps,
	};
}

export default useForm;
