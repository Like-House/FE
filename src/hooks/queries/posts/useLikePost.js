import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/apis/axios";
import queryClient from "@/apis/queryClient";

const likePost = async (postId) => {
  await axiosInstance.post(`/api/v0/posts/${postId}/like`);
};

const useLikePost = () => {
  return useMutation({
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });
};

export default useLikePost;