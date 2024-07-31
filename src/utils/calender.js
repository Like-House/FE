import { toDate } from 'date-fns-tz';
import { setDate, setMonth } from 'date-fns';

function getDayList(selectedYear, selectedMonth) {
	const dateObjOfStartDay = toDate(new Date(selectedYear, selectedMonth), {
		timeZone: 'Asia/Seoul',
	});
	const dateObjOfEndDay = setDate(
		setMonth(dateObjOfStartDay, dateObjOfStartDay.getMonth() + 1),
		0,
	);

	const endDay = dateObjOfEndDay.getDate();
	const dayOfStartDay = dateObjOfStartDay.getDay();
	const dayOfEndDay = dateObjOfEndDay.getDay();
	const numOfNecessaryDaysFromPreviousMonth =
		dayOfStartDay === 0 ? 0 : dayOfStartDay;
	const numOfNecessaryDaysFromNextMonth =
		dayOfEndDay === 6 ? 0 : 6 - dayOfEndDay;

	const PreviousMonth = Array.from(
		{ length: numOfNecessaryDaysFromPreviousMonth },
		(_, index) =>
			dateObjOfStartDay.valueOf() -
			24 * 60 * 60 * 1000 * numOfNecessaryDaysFromPreviousMonth +
			24 * 60 * 60 * 1000 * index,
	);
	const CurrentMonth = Array.from(
		{ length: endDay },
		(_, index) => dateObjOfStartDay.valueOf() + 24 * 60 * 60 * 1000 * index,
	);
	const NextMonth = Array.from(
		{ length: numOfNecessaryDaysFromNextMonth },
		(_, index) => dateObjOfEndDay.valueOf() + 24 * 60 * 60 * 1000 * (index + 1),
	);
	const timestamps = PreviousMonth.concat(CurrentMonth, NextMonth);
	return timestamps;
}

function isCurrentMonth(timestamp, month) {
	return toDate(timestamp, { timeZone: 'Asia/Seoul' }).getMonth() === month;
}

export { isCurrentMonth, getDayList };
