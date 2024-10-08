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
	// setting/family-settings
	FAMILY_SETTINGS: 'family-settings',
	// setting/delete-account
	DELETE_ACCOUNT: 'delete-account',
	// setting/family-edit
	FAMILY_EDIT: 'family-edit',
	// Q/A
	QNA: 'qna',
	// setting/logout
	LOGOUT: 'logout',
	// setting/NotificationSettings
	NOTIFICATION_SETTINGS: 'notification-settings',
	// /home/setting/edit-profile
	ADD_SCHEDULE: '/add-schedule',
	DETAILPOST: 'detailPost',

	PATCH_SCHEDULE: '/patch-schedule',

	// 가족공간 입장 x 프로필 수정
	PROFILE_CHANGE: 'profile',
};

const API_PATH = {
	// auth
	SIGNUP: '/api/v0/auth/signup',
	LOGIN: '/api/v0/auth/signin',
	LOGOUT: '/api/v0/auth/signout',
	EMAIL: '/api/v0/auth/email',
	AUTH: '/api/v0/auth',
	FCM: '/api/v0/auth/fcm',

	// posts
	MY_POSTS: '/api/v0/posts/my-posts',
	WRITE_POST: '/api/v0/posts',
	PATCH_SCHEDULE: '/patch-schedule',
	POST: '/api/v0/posts',

	// comment
	COMMENT: '/api/v0/comments',

	// chat
	CHAT: '/api/v0/chat-rooms',
	EMOTICON: 'api/v0/family-space/family-emoticon',

	// family
	FAMILY: 'api/v0/user-management',
	FAMILY_SPACE: 'api/v0/family-space',
	FAMILY_SPACE_ID: 'api/v0/family-space',

	// image
	IMAGE: 'api/v0/s3/presigned',

	// alarms
	NOTIFICATION: '/api/v0/users/alarms',
	NOTIFICATION_CHAT: '/api/v0/users/alarms/chats',
	NOTIFICATION_COMMENT: '/api/v0/users/alarms/comments',
	NOTIFICATION_COMMENT_REPLY: '/api/v0/users/alarms/comment-reply',
	NOTIFICATION_EVENT: '/api/v0/users/alarms/events',

	// user
	PROFILE: '/api/v0/users/profile',
	BLOCK: '/api/v0/user-management/block',
	PASSWORD: '/api/v0/users/password',

	// album
	ALBUM: '/api/v0/family-album',
	ALBUM_POST: '/api/v0/family-album/posts',

	// social login
	KAKAO_REDIRECT: 'oauth2/authorization/kakao',
	GOOGLE_REDITECT: 'oauth2/authorization/google',
	NAVER_REDITECT: 'oauth2/authorization/naver',

	//alert
	ALERT: '/api/v0/family-space',

	//schedule
	SCHEDULE: '/api/v0/schedules',
};

export { PAGE_PATH, API_PATH };
