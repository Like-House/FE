import React, { useState, useRef, useCallback } from 'react';
import * as S from './MyPosts.style';
import myposts from '../../../assets/images/myposts.png';

const MyPosts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: '오늘은 아침부터 활기차게 시작했다. 맛있는 토마토치즈 파스타를 만들어 먹으면서 하루를 시작했다. 신선한 토마토와 녹진한 치즈가 어우러진 파스타는 아침을 한층 더 행복하게 만들어주는 기분이었다.',
      tag: '가족 태그 - 엄마',
      date: '2024년 7월 7일 오후 5시 30분',
      img: null,
    },
    {
      id: 2,
      text: '집에 도착하자마자 조카가 나를 반겨주었다. "이모/삼촌!" 하고 외치며 달려오는 모습을 보니 정말 사랑스럽고 귀여웠다. 조카는 이제 세 살인데, 너무나도 밝고 명랑하다. 작은 손으로 나를 꼭 잡고 방으로 끌고 가는 모습에 절로 웃음이 나왔다. 조카와 함께 블록 쌓기 놀이를 했다.',
      tag: '가족 태그 - 조카',
      date: '2024년 7월 7일 오후 5시 30분',
      img: myposts,
    },
    {
      id: 3,
      text: '집에 도착하자마자 조카가 나를 반겨주었다. "이모/삼촌!" 하고 외치며 달려오는 모습을 보니 정말 사랑스럽고 귀여웠다. 조카는 이제 세 살인데, 너무나도 밝고 명랑하다. 작은 손으로 나를 꼭 잡고 방으로 끌고 가는 모습에 절로 웃음이 나왔다. 조카와 함께 블록 쌓기 놀이를 했다. 집에 도착하자마자 조카가 나를 반겨주었다. "이모/삼촌!" 하고 외치며 달려오는 모습을 보니 정말 사랑스럽고 귀여웠다. 조카는 이제 세 살인데, 너무나도 밝고 명랑하다. 작은 손으로 나를 꼭 잡고 방으로 끌고 가는 모습에 절로 웃음이 나왔다. 조카와 함께 블록 쌓기 놀이를 했다. 집에 도착하자마자 조카가 나를 반겨주었다. "이모/삼촌!" 하고 외치며 달려오는 모습을 보니 정말 사랑스럽고 귀여웠다. 조카는 이제 세 살인데, 너무나도 밝고 명랑하다. 작은 손으로 나를 꼭 잡고 방으로 끌고 가는 모습에 절로 웃음이 나왔다. 조카와 함께 블록 쌓기 놀이를 했다.',
      tag: '가족 태그 - 조카',
      date: '2024년 7월 7일 오후 5시 30분',
      img: myposts,
    },
  ]);

  const [page, setPage] = useState(1);
  const observer = useRef();
  const POSTS_PER_PAGE = 20;

  const loadMorePosts = useCallback(() => {
    const newPosts = Array.from({ length: POSTS_PER_PAGE }, (_, index) => ({
      id: posts.length + index + 1,
      text: '추가 더미 데이터',
      tag: '가족 태그 - 추가',
      date: '2024년 7월 7일 오후 5시 30분',
      img: myposts,
    }));

    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setPage((prevPage) => prevPage + 1);
  }, [posts]);

  const lastPostElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMorePosts]
  );

  return (
    <S.Container>
      <S.Heading>내가 쓴 글</S.Heading>
      {posts.map((post, index) => (
        <S.Post
          ref={index === posts.length - 1 ? lastPostElementRef : null}
          key={post.id}
        >
          <S.InnerContainer>
            <S.PostText>{post.text}</S.PostText>
            <S.Tag>{post.tag}</S.Tag>
            <S.Date>{post.date}</S.Date>
          </S.InnerContainer>
          {post.img && <S.Icon src={post.img} alt='myposts Icon' />}
        </S.Post>
      ))}
    </S.Container>
  );
};

export default MyPosts;
