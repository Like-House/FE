import { toDate } from 'date-fns-tz';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as S from './CustomCalendar.style';
import { DAY_OF_WEEK } from '../../../constants';
import { getDayList, isCurrentMonth } from '../../../utils/time';
import useCalender from '../../../hooks/useCalender';

const CustomCalendar = ({ size, background }) => {
	const {
		handleDayClick,
		handleLeftClick,
		handleRightClick,
		selectedYearAndMonth,
		selectedTimestamp,
		date,
	} = useCalender();

	console.log(date);

	return (
		<S.Container $size={size} $background={background}>
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

				<S.DayWrapper>
					{getDayList(
						selectedYearAndMonth.year,
						selectedYearAndMonth.month,
					).map(timestamp => (
						<S.Day
							$size={size}
							key={timestamp}
							$isSelected={timestamp === selectedTimestamp}
							$isCurrentMonth={isCurrentMonth(
								timestamp,
								selectedYearAndMonth.month,
							)}
							onClick={handleDayClick(timestamp)}
						>
							<p> {toDate(timestamp, { timeZone: 'Asia/Seoul' }).getDate()}</p>
						</S.Day>
					))}
				</S.DayWrapper>
			</S.CalendarContainer>
		</S.Container>
	);
};

export default CustomCalendar;
