import * as A from './AddSchedule.style';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Dropdown from '@/components/common/dropdown/Dropdown';
import FloatingButton from '@/components/common/floatingbutton/floatingbutton';
import Alert from '@/components/common/alert/alert';

import DefaultIcon from '@/assets/images/floatingsetting.png';
import useCreateSchedule from '@/hooks/queries/schedule/useCreateSchedule';

const AddSchedulePage = () => {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [content, setContent] = useState('');
	const [scheduleType, setScheduleType] = useState('');
	const [showAlert, setShowAlert] = useState(false);

	const navigate = useNavigate();

	const { mutate: createSchedule } = useCreateSchedule();

	const handleSubmit = e => {
		e.preventDefault();
		if (!title || !date || !content || !scheduleType) {
			setShowAlert(true);
			return;
		}
		const newSchedule = { title, date, content, scheduleType };

		createSchedule(newSchedule, {
			onSuccess: () => {
				navigate('/home/calender', { state: { schedule: newSchedule } });
			},
			onError: error => {
				console.log('일정 추가 실패:', error);
			},
		});
	};

	const handleClick = () => {
		document
			.querySelector('form')
			.dispatchEvent(new Event('submit', { bubbles: true }));
	};

	const handleAlertConfirm = () => {
		setShowAlert(false);
	};

	return (
		<A.Container>
			<A.Wrapper>
				<h2>일정 추가</h2>
				<A.Content>
					<A.Form onSubmit={handleSubmit}>
						<label>날짜</label>
						<input
							type="date"
							value={date}
							onChange={e => setDate(e.target.value)}
							required
						/>
						<label>일정 유형</label>
						<A.Type>
							<Dropdown
								label={'어떤 일정인가요?'}
								options={['생일', '가족 행사', '개인 일정', '기일']}
								onSelect={option => setScheduleType(option)}
								openIcon={<RiArrowDropDownLine size={'30px'} />}
								closeIcon={<RiArrowDropUpLine size={'30px'} />}
							/>
						</A.Type>
						<label>제목</label>
						<input
							type="text"
							value={title}
							onChange={e => setTitle(e.target.value)}
							placeholder="제목을 입력해주세요."
							required
						/>
						<label>내용</label>
						<textarea
							value={content}
							onChange={e => setContent(e.target.value)}
							placeholder="내용을 입력해주세요."
							required
						/>
						<A.Button>
							<FloatingButton
								onClick={handleClick}
								backgroundColor="#FFC933"
								borderColor="#FFC933"
								icon={<img src={DefaultIcon} alt="default icon" />}
							/>
						</A.Button>
					</A.Form>
				</A.Content>
			</A.Wrapper>

			<Alert
				message="모든 필드를 채워주세요."
				onConfirm={handleAlertConfirm}
				isOpen={showAlert}
			/>
		</A.Container>
	);
};

export default AddSchedulePage;
