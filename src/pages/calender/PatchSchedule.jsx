import * as A from './AddSchedule.style';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Dropdown from '@/components/common/dropdown/Dropdown';
import FloatingButton from '@/components/common/floatingbutton/floatingbutton';
import Alert from '@/components/common/alert/alert';

import DefaultIcon from '@/assets/images/floatingsetting.png';
import useGetSingleSchedule from '@/hooks/queries/schedule/useGetSingleSchedule';
import usePatchSchedule from '@/hooks/queries/schedule/usePatchSchedule';

const PatchSchedule = () => {
	const location = useLocation();
	const { scheduleId } = location.state || {};
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [content, setContent] = useState('');
	const [scheduleType, setScheduleType] = useState('');
	const [showAlert, setShowAlert] = useState(false);

	const { data: scheduleData } = useGetSingleSchedule({
		scheduleId: scheduleId ? scheduleId : null,
	});

	const { mutate: patchSchedule } = usePatchSchedule();

	useEffect(() => {
		if (scheduleData) {
			setTitle(scheduleData.title);
			setDate(scheduleData.date);
			setContent(scheduleData.content);
			setScheduleType(scheduleData.dtype);
		}
	}, [scheduleData]);

	const handleSubmit = e => {
		e.preventDefault();
		patchSchedule(
			{
				scheduleId,
				date,
				dtype: scheduleType,
				title,
				content,
			},
			{
				onSuccess: () => {
					navigate('/home/calender');
				},
				onError: () => {
					setShowAlert(true);
				},
			},
		);
	};

	const handleAlertConfirm = () => {
		setShowAlert(false);
	};

	return (
		<A.Container>
			<A.Wrapper>
				<h2>일정 수정</h2>
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
								selectedOption={scheduleType}
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
								type="submit"
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

export default PatchSchedule;
