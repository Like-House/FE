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
	// setting/change-password
	CHANGE_PASSWORD: 'change-password',
	// setting/my-posts
	MY_POSTS: 'my-posts',
	// setting/family-space-settings
	FAMILY_SPACE_SETTINGS: 'family-space-settings',
	// setting/edit-profile
	EDIT_PROFILE: 'edit-profile',
	//setting/family-settings
	FAMILY_SETTINGS: 'family-settings',
	// setting/delete-account
	DELETE_ACCOUNT: 'delete-account',
	// Q/A
	QNA: 'qna',
	// setting/logout
	LOGOUT: 'logout',
	// setting/notification-settings
	NOTIFICATION_SETTINGS: 'notification-settings',
};

const API_PATH = {
	//auth
	SIGNUP: '/api/v0/auth/signup',
	LOGIN: '/api/v0/auth/signin',
	LOGOUT: '/api/v0/auth/signout',
	EMAIL: '/api/v0/auth/email',
	AUTH: '/api/v0/auth',

	//posts
	MY_POSTS: '/api/v0/posts/my-posts',

	// chat
	CHAT: '/api/v0/chat-rooms',

	// family
	FAMILY: 'api/v0/user-management',
	FAMILY_SPACE: 'api/v0/family-space',
	FAMILY_SPACE_ID: 'api/v0/family-space',

	// image
	IMAGE: 'api/v0/s3/presigned',

	//user
	PROFILE: '/api/v0/users/profile',
	BLOCK: '/api/v0/user-management/block',

	// album
	ALBUM: '/api/v0/family-album',
	ALBUM_POST: '/api/v0/family-album/posts',
};

export { PAGE_PATH, API_PATH };
