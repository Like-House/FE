import * as S from './MyPosts.style';
import React, { useRef, useCallback } from 'react';
import useGetMyPosts from '@/hooks/queries/posts/useGetMyPosts';
import useGetImageUrl from '@/hooks/queries/image/useGetImageUrl';

const PostItem = ({ post, lastPostElementRef }) => {
  const {
    data: imageData,
    isSuccess,
    error,
  } = useGetImageUrl(post.imageUrls[0]);

  if (error) {
    console.error('Image loading error:', error);
  }

  console.log('Image Data:', imageData);

  return (
    <S.Post ref={lastPostElementRef}>
      <S.InnerContainer>
        <S.PostText>{post.content}</S.PostText>
        <S.Tag>
          {post.taggedUsers?.map((user) => user.nickname).join(', ')}
        </S.Tag>
        <S.Date>{new Date(post.createdAt).toLocaleString()}</S.Date>
      </S.InnerContainer>
      {isSuccess && imageData?.url && (
        <S.Icon src={imageData.url} alt='myposts Icon' />
      )}
    </S.Post>
  );
};

const MyPosts = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyPosts();
  const observer = useRef();

  const lastPostElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, fetchNextPage]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.Heading>내가 쓴 글</S.Heading>
      {data?.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page?.result.posts.map((post, postIndex) => (
            <PostItem
              key={post.postId}
              post={post}
              lastPostElementRef={
                page.result.posts.length === postIndex + 1
                  ? lastPostElementRef
                  : null
              }
            />
          ))}
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default MyPosts;
