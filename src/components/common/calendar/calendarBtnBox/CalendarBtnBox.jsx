import * as S from './CalendarBtnBox.style';

import useCalendarStore from '@/store/useCalendarStore';

const CalendarBtnBox = () => {
	const { clear } = useCalendarStore();

	const handleClear = () => {
		clear();
	};

	const handleClick = () => {
		// navigate("/home/calender/일정추가")  적용 클릭 후 로직은 일정추가로 넘어가는 로직 일정추가 화면에서 useCalendarStore(); 을 이용해 날짜 가져오기
	};
	return (
		<S.Container>
			<button onClick={handleClear}>초기화</button>
			<button onClick={handleClick}>적용</button>
		</S.Container>
	);
};

export default CalendarBtnBox;
