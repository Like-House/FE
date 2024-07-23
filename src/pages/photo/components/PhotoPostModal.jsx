import { Avatar } from '../../../components';
import * as S from './PhotoPostModal.style';
import { IoClose } from 'react-icons/io5';

const PhotoPostModal = ({ avatar, op, date, comment, img, onClose }) => {
	return (
		<S.Backdrop>
			<S.ModalContainer>
				<S.ModalHeader>
					<S.CloseButton onClick={onClose}>
						<IoClose />
					</S.CloseButton>
				</S.ModalHeader>
				<S.ContentContainer>
					<S.ProfileArea>
						<Avatar src={avatar} size="sm" />
					</S.ProfileArea>
					<S.Content>
						<S.OP>{op}</S.OP>
						<S.Date>{date}</S.Date>
						<S.Comment>{comment}</S.Comment>
						<S.PostImg src={img} />
					</S.Content>
				</S.ContentContainer>
				<S.ModalFooter>
					<S.Button>게시글확인</S.Button>
				</S.ModalFooter>
			</S.ModalContainer>
		</S.Backdrop>
	);
};

export default PhotoPostModal;
