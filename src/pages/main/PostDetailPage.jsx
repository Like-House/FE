import { useParams } from "react-router-dom";
import useGetPostById from "@/hooks/queries/posts/useGetPostById";

const PostDetailPage = () => {
  const { postId } = useParams();
  const { data: post } = useGetPostById(postId);
}


export default PostDetailPage;