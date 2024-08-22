import { create } from 'zustand';

const useWebSocketStore = create((set, get) => ({
	enter: false,
	messages: [],
	webSocket: null,

	clearMessages: () => set({ messages: [] }),

	setMessages: message =>
		set(state => ({ messages: [...state.messages, message] })),
	setWebSocket: webSocket => set({ webSocket }),

	sendMessage: message => {
		const webSocket = get().webSocket;
		if (webSocket && webSocket.readyState === WebSocket.OPEN) {
			webSocket.send(message);
			const parsedMessage = JSON.parse(message);
			set(state => ({ messages: [...state.messages, parsedMessage] }));
		} else {
			console.log('WebSocket is not open.');
		}
	},

	enterChatRoom: chatRoomId => {
		const message = JSON.stringify({
			chatType: 'ENTER',
			content: 'ENTER',
			chatRoomId,
		});
		get().sendMessage(message);
		set({ enter: true });
	},

	exitChatRoom: chatRoomId => {
		const message = JSON.stringify({
			chatType: 'EXIT',
			content: 'EXIT',
			chatRoomId,
		});
		get().sendMessage(message);
		set({ enter: false });
	},
}));

export default useWebSocketStore;
