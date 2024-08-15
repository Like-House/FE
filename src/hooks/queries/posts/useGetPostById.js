import { useQuery } from "@tanstack/react-query";
import { getPostById } from "@/apis/post";

const useGetPostById = (postId) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
  });
};

export default useGetPostById;