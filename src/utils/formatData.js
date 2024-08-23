const formatDate = dateString => {
	const date = new Date(dateString);
	const options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	};

	const formatter = new Intl.DateTimeFormat('ko-KR', options);

	const [year, month, day] = formatter
		.formatToParts(date)
		.filter(part => part.type !== 'literal')
		.map(part => part.value);
	const [hour, minute] = formatter
		.formatToParts(date)
		.filter(part => part.type === 'hour' || part.type === 'minute')
		.map(part => part.value);

	const ampm = date.getHours() >= 12 ? '오후' : '오전';

	return `${year}년 ${month}월 ${day}일 ${ampm} ${hour}시 ${minute}분`;
};

const formatYMD = dateString => {
	const date = new Date(dateString);
	const options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	};

	const formatter = new Intl.DateTimeFormat('ko-KR', options);

	const [year, month, day] = formatter
		.formatToParts(date)
		.filter(part => part.type !== 'literal')
		.map(part => part.value);

	return `${year}년 ${month}월 ${day}일`;
};

export { formatDate, formatYMD };
