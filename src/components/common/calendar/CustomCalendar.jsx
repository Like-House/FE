import * as S from './CustomCalendar.style';

import CalendarBtnBox from './calendarBtnBox/CalendarBtnBox';
import { toDate } from 'date-fns-tz';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { SlPresent } from 'react-icons/sl';
import { IoSquare } from 'react-icons/io5';

import { DAY_OF_WEEK } from '@/constants';
import { getDayList, isCurrentMonth } from '@/utils';
import theme from '@/theme/theme';
import useCalendarStore from '@/store/useCalendarStore';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CustomCalendar = ({ size, hasBackgroundColor }) => {
	const { pathname } = useLocation();

	const {
		handleDayClick,
		handleLeftClick,
		handleRightClick,
		selectedYearAndMonth,
		selectedTimestamp,
		events,
		clear,
	} = useCalendarStore();

	const hasEvent = (timestamp, events) => {
		const event = events.find(e => {
			const eventDate = new Date(e.date);
			const date = new Date(timestamp);
			return (
				eventDate.getFullYear() === date.getFullYear() &&
				eventDate.getMonth() === date.getMonth() &&
				eventDate.getDate() === date.getDate()
			);
		});
		return event ? event.dtype : null;
	};

	const getIcon = dtype => {
		if (dtype === '생일') {
			return <SlPresent color={theme.COLOR.YELLOW.YELLOW_800} size={10} />;
		}
		if (dtype === '가족 행사') {
			return <FaStar color={theme.COLOR.YELLOW.YELLOW_500} size={10} />;
		}
		if (dtype === '개인 일정') {
			return <GoDotFill size={10} />;
		}
		if (dtype === '기일') {
			return <IoSquare size={6} className="icon" />;
		}
		return null;
	};

	useEffect(() => {
		clear();
	}, [pathname]);

	return (
		<S.Container $size={size} $hasBackgroundColor={hasBackgroundColor}>
			<S.DateHeader $size={size}>
				<IoIosArrowBack size={20} onClick={handleLeftClick} />
				<p>
					{selectedYearAndMonth.year}년 {selectedYearAndMonth.month + 1}월
				</p>
				<IoIosArrowForward size={20} onClick={handleRightClick} />
			</S.DateHeader>

			<S.CalendarContainer>
				<S.DayofWeekWrapper>
					{Object.values(DAY_OF_WEEK).map((e, idx) => (
						<div key={idx}>{e}</div>
					))}
				</S.DayofWeekWrapper>

				<S.DayWrapper $size={size}>
					{getDayList(
						selectedYearAndMonth.year,
						selectedYearAndMonth.month,
					).map(e => (
						<S.Day
							$size={size}
							key={e}
							$isSelected={e === selectedTimestamp}
							$isCurrentMonth={isCurrentMonth(e, selectedYearAndMonth.month)}
							onClick={() => handleDayClick(e)}
						>
							<span>{toDate(e, { timeZone: 'Asia/Seoul' }).getDate()}</span>
							{events && hasEvent(e, events) && (
								<p>{getIcon(hasEvent(e, events))}</p>
							)}
						</S.Day>
					))}
				</S.DayWrapper>
				{size === 'SM' && <CalendarBtnBox />}
			</S.CalendarContainer>
		</S.Container>
	);
};

export default CustomCalendar;
