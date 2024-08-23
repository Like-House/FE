import * as S from './CalenderMainPage.style';

import { useEffect, useState } from 'react';
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
import { FaPlus } from 'react-icons/fa6';
import Dtype from '@/components/dtype/Dtype';
import { useInView } from 'react-intersection-observer';
import { PAGE_PATH } from '@/constants';

const CalenderMainPage = () => {
	const navigate = useNavigate();
	const [showPopover, setShowPopover] = useState({});
	const [showAlert, setShowAlert] = useState(false);
	const [deleteScheduleId, setDeleteScheduleId] = useState(null);

	const { ref, inView } = useInView({
		threshold: 0,
		delay: 0,
	});

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
	const { date, setEvents } = useCalendarStore();
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
	});

	const monthlyScheduleDataList = monthlyScheduleData?.scheduleDataResponseList;

	useEffect(() => {
		if (monthlyScheduleDataList) {
			setEvents(monthlyScheduleData?.scheduleDataResponseList);
		}
	}, [monthlyScheduleDataList]);

	//일 별 일정 무한 스크롤
	const {
		data: dailyScheduleData,
		fetchNextPage,
		hasNextPage,
		isFetching,
	} = useGetDailySchedule({ date: selectedDate || currentDate });

	//일정 추가 페이지 이동
	const handleClick = () => {
		navigate(
			`${PAGE_PATH.HOME}/${PAGE_PATH.CALENDER}${PAGE_PATH.ADD_SCHEDULE}`,
		);
	};

	//일정 수정 페이지 이동
	const handleEdit = scheduleId => {
		navigate(
			`${PAGE_PATH.HOME}/${PAGE_PATH.CALENDER}${PAGE_PATH.PATCH_SCHEDULE}`,
			{ state: { scheduleId } },
		);
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

	useEffect(() => {
		if (inView) {
			!isFetching && hasNextPage && fetchNextPage();
		}
	}, [inView, isFetching, hasNextPage]);

	return (
		<S.Container>
			<S.Schedule>
				<S.Calender>
					<CustomCalendar size="LG" />
				</S.Calender>
				<S.Button>
					<FloatingButton
						onClick={handleClick}
						backgroundColor="#FFC933"
						borderColor="#FFC933"
						icon={<FaPlus />}
					/>
				</S.Button>
				<S.ScheduleList>
					<ul>
						{dailyScheduleData?.map(e =>
							e.result.scheduleDataResponseList.map((data, idx) => (
								<li key={idx}>
									<S.ScheduleWrapper>
										<Dtype dtype={data.dtype} />
										<S.ScheduleBox>
											<div>{data.date}</div>
											<h5>{data.title}</h5>
											<p>{data.content}</p>
										</S.ScheduleBox>
									</S.ScheduleWrapper>
									<span
										onClick={() => handlePopoverToggle(idx)}
										style={{ marginLeft: 'auto', cursor: 'pointer' }}
									>
										<HiMiniEllipsisVertical />
									</span>
									{showPopover[idx] && (
										<div
											style={{
												position: 'absolute',
												top: '30px',
												right: '40px',
												zIndex: '1',
											}}
											onMouseLeave={() => handlePopoverClose(idx)}
										>
											<PopOver items={popoverItems(data.scheduleId)} />
										</div>
									)}
								</li>
							)),
						)}
						<div ref={ref} />
					</ul>
				</S.ScheduleList>
			</S.Schedule>
			<S.RightSidebar>
				<h2>우리 가족 {currentMonth}월 일정</h2>
				<S.MonthWrapper>
					<ul>
						{monthlyScheduleData?.scheduleDataResponseList.length > 0 ? (
							monthlyScheduleData.scheduleDataResponseList.map(
								(schedule, index) => (
									<li key={index}>
										<strong>{schedule.title}</strong>
										<span>{schedule.date}</span>
										<S.Content>
											<Dtype dtype={schedule?.dtype} mini={true} />
											<p>{schedule.content}</p>
										</S.Content>
									</li>
								),
							)
						) : (
							<li>일정이 없습니다.</li>
						)}
					</ul>
				</S.MonthWrapper>
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
