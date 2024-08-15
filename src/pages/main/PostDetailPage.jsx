import * as S from './PostDetailPage.style';
import { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaRegBellSlash } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";

import useGetPostById from "@/hooks/queries/posts/useGetPostById";
import useDeletePost from '@/hooks/queries/posts/useDeletePost.js';
import useLikePost from '@/hooks/queries/posts/useLikePost.js';
import useUnlikePost from '@/hooks/queries/posts/useUnlikePost.js';

import PostItem from '@/components/post/PostItem.jsx';

const LOCAL_STORAGE_LIKES_KEY = 'likes';

const PostDetailPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPostById(postId);
  const post = data?.result;

  const { mutate: deletePost } = useDeletePost();
  const likePostMutation = useLikePost();
  const unlikePostMutation = useUnlikePost();

  const [showMenu, setShowMenu] = useState(null);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentCounts, setCommentCounts] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [showCommentInput, setShowCommentInput] = useState({});

  useEffect(() => {
    const storedLikes = localStorage.getItem(LOCAL_STORAGE_LIKES_KEY);
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_LIKES_KEY, JSON.stringify(likes));
  }, [likes]);

  const handleLike = (postId) => {
    setLikes((prev) => {
      const currentLike = prev[postId] || { count: 0, liked: false };
      const liked = currentLike.liked;
      const newCount = liked ? currentLike.count - 1 : currentLike.count + 1;
      return {
        ...prev,
        [postId]: { count: newCount, liked: !liked },
      };
    });

    if (likes[postId]?.liked) {
      unlikePostMutation.mutate(postId);
    } else {
      likePostMutation.mutate(postId);
    }
  };

  const handleCommentClick = (postId) => {
    setShowCommentInput((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
    if (!showCommentInput[postId]) {
      setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    }
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs((prev) => ({ ...prev, [postId]: value }));
  };

  const handleCommentSubmit = (postId) => {
    if (commentInputs[postId]) {
      setComments((prev) => ({
        ...prev,
        [postId]: [...prev[postId], commentInputs[postId]],
      }));
      setCommentCounts((prev) => ({
        ...prev,
        [postId]: prev[postId] + 1,
      }));

      addCommentMutation.mutate({ postId, content: commentInputs[postId] });
      setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    }
  };

  const handleMenuToggle = (postId) => {
    setShowMenu((prev) => (prev === postId ? null : postId));
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const handleDeletePost = (postId) => {
    deletePost(postId, {
      onSuccess: () => {
        navigate('/home');
      },
    });
  };

  const menuItems = [
    {
      icon: <FaEdit />,
      message: '수정하기',
      onClick: () => {
        console.log('수정하기 클릭됨');
        setShowMenu(null);
        // 수정로직 추가
      },
    },
    {
      icon: <FaTrashAlt />,
      message: '삭제하기',
      onClick: () => {
        console.log('삭제하기 클릭됨');
        if (postId) {
          handleDeletePost(postId);
        }
        setShowMenu(null);
      },
    },
    {
      icon: <FaRegBellSlash />,
      message: '알림끄기',
      onClick: () => {
        console.log('알림끄기 클릭됨');
        setShowMenu(null);
        togglePostAlarmMutation.mutate(showMenu);
      },
    },
  ];
  console.log(post);

  return (
    <S.PostContainer>
      {post && (
        <PostItem
          post={post}
          likes={likes}
          onLike={handleLike}
          onCommentClick={handleCommentClick}
          commentCounts={commentCounts}
          comments={comments}
          showCommentInput={showCommentInput}
          handleMenuToggle={handleMenuToggle}
          showMenu={showMenu}
          handleMouseLeave={handleMouseLeave}
          menuItems={menuItems}
          commentInputs={commentInputs}
          handleCommentChange={handleCommentChange}
          handleCommentSubmit={handleCommentSubmit}
        />
      )}

    </S.PostContainer>
  );
};


export default PostDetailPage;