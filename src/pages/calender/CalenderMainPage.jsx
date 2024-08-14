import * as S from './CalenderMainPage.style';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import FloatingButton from '@/components/common/floatingbutton/floatingbutton';
import PopOver from '@/components/common/popover/PopOver';
import Alert from '@/components/common/alert/alert';
import { HiMiniEllipsisVertical } from 'react-icons/hi2';
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6';
import useGetMonthlySchedule from '@/hooks/queries/schedule/useGetMonthlySchedule';
import useGetDailySchedule from '@/hooks/queries/schedule/useGetDailySchedule';
import useCalendarStore from '@/store/useCalendarStore';

const CalenderMainPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [schedules, setSchedules] = useState([]);
	const [showPopover, setShowPopover] = useState({});
	const [showAlert, setShowAlert] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);

	const getCurrentYearMonth = () => {
		const now = new Date();
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, '0');
		return `${year}-${month}`;
	};

	const getCurrentMonth = () => {
		const now = new Date();
		const month = now.getMonth() + 1;
		return month;
	};

	const getCurrentDate = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	const currentDate = getCurrentDate();

	//날짜 선택 후 한국 시간으로 변경
	const { date } = useCalendarStore();
	let selectedDate = null;
	if (date) {
		const utcDate = new Date(date);
		if (!isNaN(utcDate.getTime())) {
			const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
			selectedDate = kstDate?.toISOString().split('T')[0];
		}
	}
	console.log(selectedDate);

	const currentMonth = getCurrentMonth();
	const currentYearMonth = getCurrentYearMonth();

	//월 별 일정
	const { data: monthlyScheduleData } = useGetMonthlySchedule({
		yearMonth: currentYearMonth,
		page: 1,
		size: 10,
	});
	const monthlyScheduleDataList = monthlyScheduleData?.scheduleDataResponseList;
	console.log(monthlyScheduleDataList);

	//일 별 일정
	const { data: dailyScheduleData } = useGetDailySchedule({
		date: selectedDate || currentDate,
		cursor: 1,
		size: 10,
	});

	const dailyScheduleDataList = dailyScheduleData?.scheduleDataResponseList;
	console.log(dailyScheduleDataList);

	const handleClick = () => {
		navigate('/home/calender/add-schedule');
	};

	const saveSchedulesToLocalStorage = schedules => {
		localStorage.setItem('schedules', JSON.stringify(schedules));
	};

	const loadSchedulesFromLocalStorage = () => {
		const storedSchedules = localStorage.getItem('schedules');
		return storedSchedules ? JSON.parse(storedSchedules) : [];
	};

	useEffect(() => {
		const initialSchedules = loadSchedulesFromLocalStorage();
		setSchedules(initialSchedules);
	}, []);

	useEffect(() => {
		if (location.state && location.state.schedule) {
			const newSchedule = location.state.schedule;
			const existingSchedules = loadSchedulesFromLocalStorage();

			// 중복 체크
			if (
				!existingSchedules.some(
					schedule =>
						schedule.title === newSchedule.title &&
						schedule.date === newSchedule.date,
				)
			) {
				const updatedSchedules = [newSchedule, ...existingSchedules];
				setSchedules(updatedSchedules);
				saveSchedulesToLocalStorage(updatedSchedules);
			}
		}
	}, [location.state]);

	useEffect(() => {
		saveSchedulesToLocalStorage(schedules);
	}, [schedules]);

	// PopOver
	const handleEdit = () => {
		console.log('Edit button clicked');
	};

	const handleDelete = () => {
		const updatedSchedules = schedules.filter((_, i) => i !== currentIndex);
		setSchedules(updatedSchedules);
		saveSchedulesToLocalStorage(updatedSchedules);
		setShowAlert(false);
	};

	const popoverItems = index => [
		{ icon: <FaPenToSquare />, message: '수정하기', onClick: handleEdit },
		{
			icon: <FaTrashCan />,
			message: '삭제하기',
			onClick: () => {
				setCurrentIndex(index);
				setShowAlert(true);
			},
		},
	];

	const handlePopoverToggle = index => {
		setShowPopover(prevState => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};

	const handlePopoverClose = index => {
		setShowPopover(prevState => ({
			...prevState,
			[index]: false,
		}));
	};

	const handleAlertConfirm = () => {
		handleDelete();
	};

	const handleAlertCancel = () => {
		setShowAlert(false);
	};

	return (
		<S.Container>
			<S.Schedule>
				<S.Calender>
					<CustomCalendar size="LG" />
					<S.Button>
						<FloatingButton
							onClick={handleClick}
							backgroundColor="#FFC933"
							borderColor="#FFC933"
							icon={<span style={{ color: 'white', fontSize: '50px' }}>+</span>}
						/>
					</S.Button>
				</S.Calender>
				<S.ScheduleList>
					<ul>
						{dailyScheduleDataList?.length > 0 &&
							dailyScheduleDataList.map((schedule, index) => (
								<li key={index}>
									<div>
										<p>{schedule.date}</p>
										<br />
										<strong>{schedule.title}</strong>
										<br />
										<p>{schedule.content}</p>
									</div>
									<span
										onClick={() => handlePopoverToggle(index)}
										style={{ marginLeft: 'auto', cursor: 'pointer' }}
									>
										<HiMiniEllipsisVertical />
									</span>
									{showPopover[index] && (
										<div
											style={{
												position: 'absolute',
												top: '30px',
												right: '40px',
												zIndex: '1',
											}}
											onMouseLeave={() => handlePopoverClose(index)}
										>
											<PopOver items={popoverItems(index)} />
										</div>
									)}
								</li>
							))}
					</ul>
				</S.ScheduleList>
			</S.Schedule>
			<S.RightSidebar>
				<h2>우리 가족 {currentMonth}월 일정</h2>
				<div>
					<ul>
						{monthlyScheduleDataList?.length > 0 ? (
							monthlyScheduleDataList.map((schedule, index) => (
								<li key={index}>
									<strong>{schedule.title}</strong>
									{schedule.date}
									<br />
									<p>{schedule.content}</p>
								</li>
							))
						) : (
							<li>일정이 없습니다.</li>
						)}
					</ul>
				</div>
			</S.RightSidebar>
			<Alert
				message="일정을 삭제할까요?"
				onConfirm={handleAlertConfirm}
				onCancel={handleAlertCancel}
				isOpen={showAlert}
			/>
		</S.Container>
	);
};

export default CalenderMainPage;
