import useGetProfileImg from '@/hooks/queries/alert/useGetProfileImg.js';
import * as S from './AlertBox.style.js';

import { Avatar } from '@/components/index.js';

const AlertBox = ({ id, user, message, date, icon, profile }) => {
	const { data: realProflieUrl } = useGetProfileImg({ imageUrl: profile });
	const realUrl = realProflieUrl?.result?.url;
	return (
		<S.AlertConatainer id={id}>
			<S.AlertContent>
				<Avatar src={realUrl} size="md" />
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
