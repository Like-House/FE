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
		const onChange = event => handleChangeText(name, event.target.value);
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
	};
}

export default useForm;
