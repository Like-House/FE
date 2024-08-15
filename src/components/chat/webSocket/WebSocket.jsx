import { useEffect, useRef } from 'react';

import useWebSocketStore from '@/store/useWebSocketStore';

const WebSocketComponent = ({ children }) => {
	const setMessages = useWebSocketStore(state => state.setMessages);
	const setWebSocket = useWebSocketStore(state => state.setWebSocket);
	const webSocket = useRef(null);

	useEffect(() => {
		webSocket.current = new WebSocket(
			`${import.meta.env.VITE_SOCKET_API_URL}/chat`,
		);

		webSocket.current.onopen = () => {
			console.log('WebSocket 연결!');
			setWebSocket(webSocket.current);
		};
		webSocket.current.onclose = error => {
			console.log('WebSocket closed:', error);
			setTimeout(webSocket.current.onopen, 300);
		};
		webSocket.current.onerror = error => {
			console.log('WebSocket error:', error);
		};
		webSocket.current.onmessage = event => {
			if (event.data) {
				// 받은 메세지
				const msg = JSON.parse(event.data);
				setMessages(msg);
			} else if (event) {
				// 보낸 메세지
				setMessages(event);
			} else {
				console.error('WebSocket message is undefined');
			}
		};

		return () => {
			webSocket.current?.close();
		};
	}, []);

	return <>{children}</>;
};

export default WebSocketComponent;
