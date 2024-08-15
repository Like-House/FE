import { useMutation } from '@tanstack/react-query';
import { updatePost } from '@/apis/post';

const useUpdatePost = () => {
  return useMutation({
    mutationFn: ({ postId, updatedData }) => updatePost(postId, updatedData),
    onSuccess: (data) => {
      console.log('게시글 수정 완료', data);
    }
  });
};

export default useUpdatePost;