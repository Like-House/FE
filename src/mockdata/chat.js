const DUMMY_CHAT_LIST = [
	{
		chatId: 1, // 아빠
		content: 'First message in room 1',
		imageUrl: '/profile.png',
		createAt: '2024-07-25T12:34:56',
		updateAt: '2024-07-24T12:34:56',
		title: '아빠',
	},
	{
		chatId: 2, // 엄마
		content: 'First message in room 2',
		imageUrl: '/profile.png',
		createAt: '2024-07-25T12:35:56',
		updateAt: '2024-07-25T12:35:56',
		title: '엄마',
	},
];

const DUMMY_CHAT_1 = [
	{
		code: 'COMMON200',
		message: 'OK, 성공',
		data: {
			chatResponseList: [
				{
					chatId: 1,
					content: 'Hello, World!',
					senderId: 1,
					unreadUserCount: 0,
					createAt: '2024-07-25T12:34:56',
					updateAt: '2024-07-25T12:34:56',
				},
				{
					chatId: 2,
					content: 'How are you?',
					senderId: 0,
					unreadUserCount: 0,
					createAt: '2024-07-25T12:35:56',
					updateAt: '2024-07-25T12:35:56',
				},
				{
					chatId: 3,
					content: "I'm fine, thank you!",
					senderId: 1,
					unreadUserCount: 1,
					createAt: '2024-07-25T12:36:56',
					updateAt: '2024-07-25T12:36:56',
				},
			],
		},
	},
];

export { DUMMY_CHAT_LIST, DUMMY_CHAT_1 };
