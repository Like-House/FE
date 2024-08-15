import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getWritePost } from "@/apis";

const useWritePosts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData) => getWritePost({postData}),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });
};

export default useWritePosts;