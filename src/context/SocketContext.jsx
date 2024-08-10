import { createContext, useContext, useEffect, useState } from 'react';

export const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	// const [socket, setSocket] = useState(null);
	const socket = new WebSocket(
		'ws://likehouse-dev-env.eba-pnp4iu5a.ap-northeast-2.elasticbeanstalk.com/chats?token=eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6Im1hc2swNDE5QGRhdW0ubmV0Iiwic29jaWFsTmFtZSI6IktBS0FPIiwiaWF0IjoxNzIzMDUwMjE3LCJleHAiOjE3MjMwNTM4MTd9.ZdVdgzqcQE4PyvxQ6dFLwtlK4Poc3_gsAPjNB7M7nI6lya6QiET8uIG7dxCDMuXqZ0JILIGO2KT1p28C1f6j4w',
	);
	console.log(socket);

	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	);
};
