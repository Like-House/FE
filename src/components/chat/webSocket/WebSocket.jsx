import { useEffect, useRef } from 'react';
import useWebSocketStore from '../../../store/useWebSocketStore';

const WebSocketComponent = ({ children }) => {
	const setMessages = useWebSocketStore(state => state.setMessages);
	const setWebSocket = useWebSocketStore(state => state.setWebSocket);
	const webSocket = useRef(null);
	const token = localStorage.getItem('accessToken');

	useEffect(() => {
		webSocket.current = new WebSocket(
			`${import.meta.env.VITE_SOCK_URL}/chat?token=${token}`,
		);

		webSocket.current.onopen = () => {
			console.log('WebSocket 연결!');
			setWebSocket(webSocket.current);
		};
		webSocket.current.onclose = error => {
			console.log('WebSocket closed:', error);
		};
		webSocket.current.onerror = error => {
			console.log('WebSocket error:', error);
		};
		webSocket.current.onmessage = event => {
			if (event.data) {
				console.log('Received message:', event.data);
				try {
					const parsedMessage = JSON.parse(event.data);
					setMessages(parsedMessage);
					console.log('Parsed message:', parsedMessage);
				} catch (error) {
					console.error(
						'Failed to parse WebSocket message:',
						error,
						event.data,
					);
				}
			} else if (event) {
				console.log('Received event:', event);
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
