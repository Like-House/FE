import { useLocation } from 'react-router-dom';

import { ChangeRoom } from '@/components';

const ChatImgPage = () => {
	const { state } = useLocation();
	return <ChangeRoom room={state} />;
};

export default ChatImgPage;
