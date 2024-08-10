import React, { useState, useEffect } from 'react';
import * as S from './NotificationSettings.style';
import CheckBox from '../../../components/common/checkbox/checkbox';
import { RESPONSIVE_SIZE } from '../../../constants/size';
import useNotificationSettings from '../../../hooks/queries/notifications/useNotificationSettings';

export default function NotificationSettings() {
  const { data, isLoading, error, updateSettings } = useNotificationSettings();
  const [notifications, setNotifications] = useState({
    chat: false,
    comment: false,
    reply: false,
    event: false,
  });

  useEffect(() => {
    if (data) {
      setNotifications({
        chat: data.chatAlarmStatus,
        comment: data.commentAlarmStatus,
        reply: data.commentReplyAlarmStatus,
        event: data.eventAlarmStatus,
      });
    }
  }, [data]);

  const [checkboxSize, setCheckboxSize] = useState('md');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(RESPONSIVE_SIZE.TABLET)) {
        setCheckboxSize('sm');
      } else {
        setCheckboxSize('md');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCheckboxChange = (name) => {
    setNotifications((prev) => {
      const newState = {
        ...prev,
        [name]: !prev[name],
      };
      updateSettings(newState);
      return newState;
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <S.Container>
      <S.Title>알림 설정</S.Title>
      <S.NotificationItem>
        <S.LabelBox>
          <S.Label>채팅 알림</S.Label>
          <S.Description>채팅이 새로 왔을 때 알림을 받습니다.</S.Description>
        </S.LabelBox>
        <CheckBox
          checked={notifications.chat}
          onChange={() => handleCheckboxChange('chat')}
          type='background'
          size={checkboxSize}
        />
      </S.NotificationItem>
      <S.NotificationItem>
        <S.LabelBox>
          <S.Label>댓글 알림</S.Label>
          <S.Description>
            내가 쓴 게시물에 댓글이 달렸을 때 알림을 받습니다.
          </S.Description>
        </S.LabelBox>
        <CheckBox
          checked={notifications.comment}
          onChange={() => handleCheckboxChange('comment')}
          type='background'
          size={checkboxSize}
        />
      </S.NotificationItem>
      <S.NotificationItem>
        <S.LabelBox>
          <S.Label>대댓글 알림</S.Label>
          <S.Description>
            내가 쓴 댓글에 대댓글이 달렸을 때 알림을 받습니다.
          </S.Description>
        </S.LabelBox>
        <CheckBox
          checked={notifications.reply}
          onChange={() => handleCheckboxChange('reply')}
          type='background'
          size={checkboxSize}
        />
      </S.NotificationItem>
      <S.NotificationItem>
        <S.LabelBox>
          <S.Label>이벤트 알림 설정</S.Label>
          <S.Description>
            [가족같은]에서 수신하는 광고성 이벤트 알림을 받습니다.
          </S.Description>
        </S.LabelBox>
        <CheckBox
          checked={notifications.event}
          onChange={() => handleCheckboxChange('event')}
          type='background'
          size={checkboxSize}
        />
      </S.NotificationItem>
    </S.Container>
  );
}
