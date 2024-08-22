import { useEffect, useRef } from 'react';
import useWebSocketStore from '@/store/useWebSocketStore';
import { useChatRoom } from '@/store';

const WebSocketComponent = ({ children }) => {
	const { setMessages, setWebSocket, enterChatRoom } = useWebSocketStore(
		state => state,
	);
	const { chatRoomId } = useChatRoom(state => state);

	const webSocket = useRef(null);
	const reconnectTimeout = useRef(null);
	const isReconnect = useRef(false);

	const connectWebSocket = () => {
		webSocket.current = new WebSocket(
			`${import.meta.env.VITE_SOCKET_API_URL}/chat`,
		);

		webSocket.current.onopen = () => {
			console.log('WebSocket 연결!');
			setWebSocket(webSocket.current);
			clearTimeout(reconnectTimeout.current);

			if (chatRoomId && isReconnect.current) {
				enterChatRoom(chatRoomId);
			}
		};

		webSocket.current.onclose = event => {
			console.log('WebSocket closed:', event);
			if (event.code === 1006) {
				isReconnect.current = true;
				reconnectWebSocket();
			} else {
				isReconnect.current = false;
			}
		};

		webSocket.current.onerror = error => {
			console.log('WebSocket error:', error);
			webSocket.current.close();
		};

		webSocket.current.onmessage = event => {
			if (event.data) {
				// 받은 메시지
				const msg = JSON.parse(event.data);
				setMessages(msg);
			} else if (event) {
				// 보낸 메시지
				setMessages(event);
			} else {
				console.error('WebSocket message is undefined');
			}
		};
	};

	const reconnectWebSocket = () => {
		clearTimeout(reconnectTimeout.current);
		reconnectTimeout.current = setTimeout(() => {
			connectWebSocket();
		}, 3000);
	};

	useEffect(() => {
		connectWebSocket();

		return () => {
			clearTimeout(reconnectTimeout.current);
			webSocket.current?.close();
		};
	}, []);

	return <>{children}</>;
};

export default WebSocketComponent;
