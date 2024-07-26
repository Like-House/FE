import { toDate } from 'date-fns-tz';
import * as S from './CustomCalendar.style';
import { DAY_OF_WEEK } from '../../../constants';
import { getDayList, isCurrentMonth } from '../../../utils';
import theme from '../../../theme/theme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { SlPresent } from 'react-icons/sl';
import CalendarBtnBox from './calendarBtnBox/CalendarBtnBox';
import useCalendarStore from '../../../store/useCalendarStore';

const CustomCalendar = ({ size, background }) => {
	const {
		handleDayClick,
		handleLeftClick,
		handleRightClick,
		selectedYearAndMonth,
		selectedTimestamp,
		events,
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
		return event ? event.type : null;
	};

	const getIcon = type => {
		if (type === 'birthday') {
			return <SlPresent color={theme.COLOR.YELLOW.YELLOW_800} />;
		}
		if (type === 'important') {
			return <FaStar color={theme.COLOR.YELLOW.YELLOW_500} />;
		}
		if (type === 'plan') {
			return <GoDotFill />;
		}
		return null;
	};

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
