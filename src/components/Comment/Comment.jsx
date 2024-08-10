import CustomButton from '../../components/common/button/CustomButton.jsx';
import * as S from './Comment.style.js';

const Comment = ({ value, onChange, onSubmit, disabled }) => {
	return (
		<S.CommentInput>
			<input
				type="text"
				value={value}
				onChange={onChange}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						onSubmit();
					}
				}}
				placeholder="댓글 달기"
			/>
			<CustomButton
				btnType="secondary"
				label="댓글 달기"
				disabled={disabled}
				onClick={onSubmit}
				width="140px"
			/>
		</S.CommentInput>
	);
};

export default Comment;
