import * as S from './CalenderMainPage.style';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import FloatingButton from '@/components/common/floatingbutton/floatingbutton';
import PopOver from '@/components/common/popover/PopOver';
import Alert from '@/components/common/alert/alert';
import { HiMiniEllipsisVertical } from 'react-icons/hi2';
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6';
import useGetMonthlySchedule from '@/hooks/queries/schedule/useGetMonthlySchedule';
import useGetDailySchedule from '@/hooks/queries/schedule/useGetDailySchedule';
import useCalendarStore from '@/store/useCalendarStore';
import useDeleteSchedule from '@/hooks/queries/schedule/useDeleteSchedule';

const CalenderMainPage = () => {
	const navigate = useNavigate();
	const [showPopover, setShowPopover] = useState({});
	const [showAlert, setShowAlert] = useState(false);
	const [deleteScheduleId, setDeleteScheduleId] = useState(null);

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

	const currentMonth = getCurrentMonth();
	const currentYearMonth = getCurrentYearMonth();

	//월 별 일정
	const { data: monthlyScheduleData } = useGetMonthlySchedule({
		yearMonth: currentYearMonth,
		page: 1,
		size: 10,
	});
	const monthlyScheduleDataList = monthlyScheduleData?.scheduleDataResponseList;

	const sortedMonthlyScheduleDataList = monthlyScheduleDataList
		? [...monthlyScheduleDataList].sort(
				(a, b) => new Date(a.date) - new Date(b.date),
			)
		: [];

	//일 별 일정
	const { data: dailyScheduleData } = useGetDailySchedule({
		date: selectedDate || currentDate,
		cursor: 1,
		size: 10,
	});

	const dailyScheduleDataList = dailyScheduleData?.scheduleDataResponseList;

	//일정 추가 페이지 이동
	const handleClick = () => {
		navigate('/home/calender/add-schedule');
	};

	//일정 수정 페이지 이동
	const handleEdit = scheduleId => {
		navigate('/home/calender/patch-schedule', { state: { scheduleId } });
	};

	const { mutate: deleteScheduleMutate } = useDeleteSchedule();

	const handleDelete = () => {
		deleteScheduleMutate(
			{ scheduleId: deleteScheduleId },
			{
				onSuccess: () => {
					setShowAlert(false);
				},
			},
		);
	};

	const popoverItems = scheduleId => [
		{
			icon: <FaPenToSquare />,
			message: '수정하기',
			onClick: () => handleEdit(scheduleId),
		},
		{
			icon: <FaTrashCan />,
			message: '삭제하기',
			onClick: () => {
				setShowAlert(true);
				setDeleteScheduleId(scheduleId);
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
											<PopOver items={popoverItems(schedule.scheduleId)} />
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
						{sortedMonthlyScheduleDataList?.length > 0 ? (
							sortedMonthlyScheduleDataList.map((schedule, index) => (
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
