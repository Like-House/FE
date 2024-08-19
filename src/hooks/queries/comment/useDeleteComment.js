import axiosInstance from "@/apis/axios";
import { useMutation } from "@tanstack/react-query";

const useDeleteComment = () => {
  return useMutation(commentId =>
    axiosInstance.delete(`/api/v0/comments/${commentId}`)
  );
};

export default useDeleteComment;