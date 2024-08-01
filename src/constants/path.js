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

	// social login
	KAKAO: 'login/oauth2/code/kakao',
};

const API_PATH = {
	//auth
	SIGNUP: '/api/v0/auth/signup',
	LOGIN: '/api/v0/auth/signin',
	LOGOUT: '/api/v0/auth/signout',

	// social login
	KAKAO: 'https://kauth.kakao.com/oauth/token',
	KAKAO_REDIRECT: 'oauth2/authorization/kakao',
};

export { PAGE_PATH, API_PATH };
