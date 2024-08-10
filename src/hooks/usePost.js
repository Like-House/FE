import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

import queryClient from '@/apis/queryClient';

const usePost = familySpaceId => {
	const fetchPosts = async () => {
		const response = await axios.get(
			`/api/v0/family-space/${familySpaceId}/posts`,
		);
		return response.data.result;
	};

	const {
		data: boardList,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['posts', familySpaceId],
		queryFn: fetchPosts,
	});

	const updateLikeMutation = useMutation({
		mutationFn: async ({ postid, liked }) => {
			const method = liked ? 'delete' : 'post';
			await axios({
				url: `/api/v0/posts/${postid}/like`,
				method,
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries(['posts', familySpaceId]);
		},
	});

	const addCommentMutation = useMutation({
		mutationFn: async ({ postid, content }) => {
			await axios.post(`/api/v0/posts/${postid}/comments`, { content });
		},
		onSuccess: () => {
			queryClient.invalidateQueries(['posts', familySpaceId]);
		},
	});

	const deletePostMutation = useMutation({
		mutationFn: async postid => {
			await axios.delete(`/api/v0/posts/${postid}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries(['posts', familySpaceId]);
		},
	});

	const togglePostAlarmMutation = useMutation({
		mutationFn: async postid => {
			await axios.put(`/api/v0/posts/${postid}/post-alarm`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries(['posts', familySpaceId]);
		},
	});

	return {
		boardList,
		isLoading,
		error,
		updateLikeMutation,
		addCommentMutation,
		deletePostMutation,
		togglePostAlarmMutation,
	};
};

export default usePost;
