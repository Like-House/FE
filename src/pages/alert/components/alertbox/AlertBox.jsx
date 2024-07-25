import { Avatar } from '../../../../components';
import * as S from './AlertBox.style';

const AlertBox = ({ icon }) => {
	return (
		<S.AlertConatainer>
			<S.AlertContent>
				<Avatar src="https://cdn.imweb.me/upload/S20210807d1f68b7a970c2/7170113c6a983.jpg" />
				<S.AlertInformation>
					<S.AlertSender>아빠</S.AlertSender>
					<S.AlertMessage>안녕안녕안녕안녕</S.AlertMessage>
					<S.AlertDate>2024-1-21</S.AlertDate>
				</S.AlertInformation>
			</S.AlertContent>
			<S.AlertIcon>
				<img src={icon} />
			</S.AlertIcon>
		</S.AlertConatainer>
	);
};

export default AlertBox;
