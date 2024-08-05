import { useNavigate, useLocation } from 'react-router-dom';
import CustomCalendar from '../../components/common/calendar/CustomCalendar';
import * as C from './CalenderMainPage.style';
import FloatingButton from '../../components/common/floatingbutton/floatingbutton';
import { useState, useEffect } from 'react';

const CalenderMainPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [schedules, setSchedules] = useState([]);

	const handleClick = () => {
		navigate('/home/calender/add-schedule');
	};

	const saveSchedulesToLocalStorage = (schedules) => {
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
			if (!existingSchedules.some(schedule => schedule.title === newSchedule.title && schedule.date === newSchedule.date)) {
				const updatedSchedules = [newSchedule, ...existingSchedules];
				setSchedules(updatedSchedules);
				saveSchedulesToLocalStorage(updatedSchedules);
			}
		}
	}, [location.state]);

	useEffect(() => {
		saveSchedulesToLocalStorage(schedules);
	}, [schedules]);

	return (
	<C.Container>
		<C.Schedule>
			<C.Calender>
				<CustomCalendar size="LG" />
				<span>
					<FloatingButton
						onClick={handleClick}
						backgroundColor= '#FFC933'
						borderColor='#FFC933'
						icon={<span style={{ color: 'white', fontSize: '50px'}}>+</span>}
					/>
				</span>
			</C.Calender>
			<C.ScheduleList>
				<ul>
					{ schedules.map((schedule, index) => (
						<li key={index}>
							<p>{schedule.date}</p><br />
							<strong>{schedule.title}</strong><br />
							<p>{schedule.content}</p>
						</li>
					)) }
				</ul>
			</C.ScheduleList>
		</C.Schedule>
		<C.RightSidebar>
			<h2>우리 가족 8월 일정</h2>
			<div>
				<ul>
					{ schedules.map((schedule, index) => (
						<li key={index}>
							<strong>{schedule.title}</strong>{schedule.date}<br />
							<p>{schedule.content}</p>
						</li>
					)) }
				</ul>
			</div>
		</C.RightSidebar>
	</C.Container>
	);
};

export default CalenderMainPage;
