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
  // Q/A
  QNA: 'qna',
  // setting/logout
  LOGOUT: 'logout',
  // setting/NotificationSettings
  NOTIFICATION_SETTINGS: 'notification-settings',
};

const API_PATH = {
  //auth
  SIGNUP: '/api/v0/auth/signup',
  LOGIN: '/api/v0/auth/signin',
  LOGOUT: '/api/v0/auth/signout',
  EMAIL: '/api/v0/auth/email',
  // chat
  CHAT: '/api/v0/chat-rooms',

  // family
  FAMILY: 'api/v0/user-management',

  // image
  IMAGE: 'api/v0/s3/presigned',

  // users
  PROFILE: '/api/v0/users/profile',

  //alrams
  NOTIFICATION_SETTINGS: '/api/v0/users/alarms',
  NOTIFICATION_CHAT: '/api/v0/users/alarms/chats',
  NOTIFICATION_COMMENT: '/api/v0/users/alarms/comments',
  NOTIFICATION_COMMENT_REPLY: '/api/v0/users/alarms/comment-reply',
  NOTIFICATION_EVENT: '/api/v0/users/alarms/events',
};

export { PAGE_PATH, API_PATH };
