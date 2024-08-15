import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/apis/axios";
import queryClient from "@/apis/queryClient";

const unlikePost = async (postId) => {
  await axiosInstance.delete(`/api/v0/posts/${postId}/like`);
};

const useUnlikePost = () => {
  return useMutation({
    mutationFn: unlikePost,
    onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
    }
  });
};

export default useUnlikePost;