import { create } from 'zustand';

import { toDate } from 'date-fns-tz';

const useCalendarStore = create(set => {
	const nowDate = toDate(Date.now(), { timeZone: 'Asia/Seoul' });

	const initialState = {
		selectedYearAndMonth: {
			year: nowDate.getFullYear(),
			month: nowDate.getMonth(),
		},
		selectedTimestamp: nowDate.setHours(0, 0, 0, 0),
		date: '',
		events: [],
	};

	return {
		...initialState,

		clear: () => set(() => initialState),

		handleLeftClick: () =>
			set(state => {
				const newMonth =
					state.selectedYearAndMonth.month === 0
						? 11
						: state.selectedYearAndMonth.month - 1;
				const newYear =
					state.selectedYearAndMonth.month === 0
						? state.selectedYearAndMonth.year - 1
						: state.selectedYearAndMonth.year;
				return {
					selectedYearAndMonth: {
						year: newYear,
						month: newMonth,
					},
				};
			}),

		handleRightClick: () =>
			set(state => {
				const newMonth =
					state.selectedYearAndMonth.month === 11
						? 0
						: state.selectedYearAndMonth.month + 1;
				const newYear =
					state.selectedYearAndMonth.month === 11
						? state.selectedYearAndMonth.year + 1
						: state.selectedYearAndMonth.year;
				return {
					selectedYearAndMonth: {
						year: newYear,
						month: newMonth,
					},
				};
			}),

		handleDayClick: timestamp =>
			set(() => {
				const selectedDate = toDate(timestamp, { timeZone: 'Asia/Seoul' });
				return {
					selectedTimestamp: timestamp,
					selectedYearAndMonth: {
						year: selectedDate.getFullYear(),
						month: selectedDate.getMonth(),
					},
					date: new Date(selectedDate).toISOString(),
				};
			}),

		setEvents: newEvents =>
			set(() => ({
				events: newEvents,
			})),
	};
});

export default useCalendarStore;
