import * as S from './PhotoPostModal.style';

import { Avatar } from '@/components';
import CloseIcon from '@/assets/images/whiteX.png';

const PhotoPostModal = ({
	avatar,
	op,
	date,
	comment,
	img,
	onClose,
	goPostDetail,
}) => {
	const handleClick = () => {
		goPostDetail();
	};
	console.log(goPostDetail);

	return (
		<S.Backdrop>
			<S.ModalContainer>
				<S.ModalHeader>
					<S.CloseButton onClick={onClose}>
						<img src={CloseIcon} />
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
					<S.Button onClick={handleClick}>게시글확인</S.Button>
				</S.ModalFooter>
			</S.ModalContainer>
		</S.Backdrop>
	);
};

export default PhotoPostModal;
