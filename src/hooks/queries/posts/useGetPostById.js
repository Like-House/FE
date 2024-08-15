import { useQuery } from "@tanstack/react-query";
import { getPostById } from "@/apis/post";

const useGetPostById = (postId) => {
  return useQuery(['post', postId], () => getPostById(postId),);
};

export default useGetPostById;