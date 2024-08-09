import { useLocation } from 'react-router-dom';

import { Message } from '../../../components';

const ChatDetailPage = () => {
	const { state } = useLocation();

	return <Message room={state} />;
};

export default ChatDetailPage;
