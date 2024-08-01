const PAGE_PATH = {
	// post
	BASE: '/',
	HOME: '/home',
	// Login
	LOGIN: 'login',
	// Signup
	SIGN_UP: 'signup',
	// Service
	SERVICE: 'service',
	// Chat
	CHAT: 'chat',
	// Setting
	SETTING: 'setting',
	// Photo
	PHOTO: 'photo',
	// Calender
	CALENDER: 'calender',
	// Alert
	ALERT: 'alert',
	// Family
	FAMILY: 'family',
	// Q/A
	QNA: 'qna',
};

const API_PATH = {
	//auth
	SIGNUP: '/api/v0/auth/signup',
	LOGIN: '/api/v0/auth/signin',
	LOGOUT: '/api/v0/auth/signout',

	// chat
	CHAT: '/api/v0/chat-rooms',
};

export { PAGE_PATH, API_PATH };
