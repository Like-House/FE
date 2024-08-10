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
	// Service/InvitationLink
	SERVICE_INVITATION_LINK: 'invitationlink',
	//Service/CreateSpace
	CREATE_SPACE: 'createspace',
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
	ADD_SCHEDULE: '/add-schedule',
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
};

const API_PATH = {
	//auth
	SIGNUP: '/api/v0/auth/signup',
	LOGIN: '/api/v0/auth/signin',
	LOGOUT: '/api/v0/auth/signout',
	EMAIL: '/api/v0/auth/email',
	AUTH: '/api/v0/auth',

	// chat
	CHAT: '/api/v0/chat-rooms',

	// family
	FAMILY: 'api/v0/user-management',
	FAMILY_SPACE: 'api/v0/family-space',
	FAMILY_SPACE_ID: 'api/v0/family-space',

	// image
	IMAGE: 'api/v0/s3/presigned',

	// users
	PROFILE: '/api/v0/users/profile',

	// album
	ALBUM: '/api/v0/family-album',
	ALBUM_POST: '/api/v0/family-album/posts',
};

export { PAGE_PATH, API_PATH };
