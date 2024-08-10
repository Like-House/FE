import { Avatar } from '../index.js';
import * as S from './AlertBox.style.js';

const AlertBox = ({ id, user, message, date, icon }) => {
	return (
		<S.AlertConatainer id={id}>
			<S.AlertContent>
				<Avatar
					src="https://cdn.imweb.me/upload/S20210807d1f68b7a970c2/7170113c6a983.jpg"
					size="md"
				/>
				<S.AlertInformation>
					<S.AlertSender>{user}</S.AlertSender>
					<S.AlertMessage>{message}</S.AlertMessage>
					<S.AlertDate>{date}</S.AlertDate>
				</S.AlertInformation>
			</S.AlertContent>
			<S.AlertIcon>
				<img src={icon} />
			</S.AlertIcon>
		</S.AlertConatainer>
	);
};

export default AlertBox;
