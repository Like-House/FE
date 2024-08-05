import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './AddSchedule.style';
import Dropdown from '../../components/common/dropdown/Dropdown';
import FloatingButton from '../../components/common/floatingbutton/floatingbutton';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const AddSchedulePage = () => {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [scheduleType, setScheduleType] = useState('');

  const navigate = useNavigate(); 

	const handleSubmit = (e) => {
		e.preventDefault();
    if (!title || !date || !content || !scheduleType) {
			alert('모든 필드를 채워주세요.');
			return;
		}
		const newSchedule = { title, date, content, scheduleType };
		console.log('일정 추가:', newSchedule);
		
		navigate('/home/calender', { state: { schedule: newSchedule } });
	};

  const handleClick = () => {
    if (!title || !date || !content || !scheduleType) {
			alert('모든 필드를 채워주세요😓');
			return;
		}
		document.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true }));
  };

	return (
    <A.Container>
      <h2>일정 추가</h2>
      <A.Content>
        <A.Form onSubmit={handleSubmit}>
          <label>날짜</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            required 
            />
          <label>일정 유형</label>
          <A.Type>
            <Dropdown
              label={"어떤 일정인가요?"}
              options={['생일','가족 행사','개인 일정','기일']}
              onSelect={(option) => setScheduleType(option)}
              openIcon={<RiArrowDropDownLine size={'30px'}/>}
              closeIcon={<RiArrowDropUpLine size={'30px'}/>}
            />
          </A.Type>
          <label>제목</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='제목을 입력해주세요.'
            required 
            />
          <label>내용</label>
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='내용을 입력해주세요.' 
            required 
          />
        </A.Form>
        <A.Button>
          <FloatingButton
            onClick={handleClick}
            backgroundColor='#FFC932'
            borderColor='#FFC932'
            icon={<span style={{ color: 'white', fontSize: '16px' }}>추가</span>}
          />
        </A.Button>
      </A.Content>
    </A.Container>
	);
};

export default AddSchedulePage;
