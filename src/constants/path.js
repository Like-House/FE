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
	ROOM: 'room',
	MODIFY: 'modify',
	INFO: 'info',

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
	// setting/family-space-settings
	FAMILY_SPACE_SETTINGS: 'family-space-settings',
	// setting/edit-profile
	EDIT_PROFILE: 'edit-profile',
	//setting/family-settings
	FAMILY_SETTINGS: 'family-settings',
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

	// family
	FAMILY: 'api/v0/user-management',

	FAMILY_SPACE: 'api/v0/family-space',

	// image
	IMAGE: 'api/v0/s3/presigned',

	// users
	PROFILE: '/api/v0/users/profile',
};

export { PAGE_PATH, API_PATH };
