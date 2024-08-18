import { useMutation } from "@tanstack/react-query";
import { addComment } from "@/apis/post";

const useAddComment = () => {
  return useMutation({
    mutationFn: addComment,
  });
};

export default useAddComment;