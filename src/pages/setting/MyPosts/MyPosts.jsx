import React, { useRef, useCallback } from 'react';
import * as S from './MyPosts.style';
import useGetMyPosts from '../../../hooks/queries/posts/useGetMyPosts';

const MyPosts = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMyPosts();
  const observer = useRef();

  console.log('Fetched data:', data);

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
      {data?.pages?.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page?.posts?.map((post, index) => (
            <S.Post
              ref={index === page.posts.length - 1 ? lastPostElementRef : null}
              key={post.postId}
            >
              <S.InnerContainer>
                <S.PostText>{post.content}</S.PostText>
                <S.Tag>
                  {post.taggedUsers?.map((user) => user.nickname).join(', ')}
                </S.Tag>
                <S.Date>{new Date(post.createdAt).toLocaleString()}</S.Date>
              </S.InnerContainer>
              {post.imageUrls?.length > 0 && (
                <S.Icon src={post.imageUrls[0]} alt='myposts Icon' />
              )}
            </S.Post>
          ))}
        </React.Fragment>
      ))}
    </S.Container>
  );
};

export default MyPosts;
