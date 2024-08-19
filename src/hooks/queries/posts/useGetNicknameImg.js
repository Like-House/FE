import { getRealImageUrl } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useGetNicknameImg = (authorNickname, profileImage) => {
	return useQuery({
		queryKey: ['posts', authorNickname],
		queryFn: () => getRealImageUrl(profileImage),
		enabled: !!profileImage,
		staleTime: 1000 * 30 * 60,
		select: data => data.result.url,
	});
};

export default useGetNicknameImg;
