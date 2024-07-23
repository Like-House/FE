import { toDate } from 'date-fns-tz';
import { useEffect, useState } from 'react';

const useCalendar = () => {
	const nowDate = toDate(Date.now(), { timeZone: 'Asia/Seoul' });

	const [selectedYearAndMonth, setSelectedYearAndMonth] = useState({
		year: nowDate.getFullYear(),
		month: nowDate.getMonth(),
	});

	const [selectedTimestamp, setSelectedTimestamp] = useState(
		nowDate.setHours(0, 0, 0, 0),
	);

	const [date, setDate] = useState(new Date(nowDate).toISOString());

	const handleLeftClick = () => {
		if (selectedYearAndMonth.month === 0) {
			setSelectedYearAndMonth(prev => ({
				year: prev.year - 1,
				month: 11,
			}));
		} else {
			setSelectedYearAndMonth(prev => ({ ...prev, month: prev.month - 1 }));
		}
	};

	const handleRightClick = () => {
		if (selectedYearAndMonth.month === 11) {
			setSelectedYearAndMonth(prev => ({
				year: prev.year + 1,
				month: 0,
			}));
		} else {
			setSelectedYearAndMonth(prev => ({ ...prev, month: prev.month + 1 }));
		}
	};

	const handleDayClick = timestamp => () => {
		setSelectedTimestamp(timestamp);
	};

	useEffect(() => {
		const selectedDate = toDate(selectedTimestamp, { timeZone: 'Asia/Seoul' });
		setSelectedYearAndMonth({
			year: selectedDate.getFullYear(),
			month: selectedDate.getMonth(),
		});
		setDate(new Date(selectedDate).toISOString());
	}, [selectedTimestamp]);

	return {
		handleDayClick,
		handleLeftClick,
		handleRightClick,
		selectedYearAndMonth,
		selectedTimestamp,
		date,
	};
};

export default useCalendar;
