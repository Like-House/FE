import { useMutation } from '@tanstack/react-query';
import queryClient from '@/apis/queryClient';
import { API_PATH } from '@/constants';
import axiosInstance from '@/apis/axios';

const deletePost = async (postId) => {
    await axiosInstance.delete(`${API_PATH.WRITE_POST}/${postId}`);
};

const useDeletePost = () => {
    return useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries(['posts']);
        },
        onError: (error) => {
            console.error('게시글 삭제 실패:', error);
        }
    });
};

export default useDeletePost;