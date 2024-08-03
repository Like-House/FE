import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ServiceMainPage.style';
import { CustomButton, Alert } from '../../../components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PAGE_PATH } from '../../../constants/path';

const ServiceMainPage = () => {
  const navigate = useNavigate();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleInvitationLinkClick = () => {
    navigate(`/${PAGE_PATH.SERVICE}/${PAGE_PATH.SERVICE_INVITATION_LINK}`);
  };

  const handleCreateSpaceClick = () => {
    setIsAlertOpen(true);
  };

  const handleConfirm = () => {
    setIsAlertOpen(false);
    navigate(`/${PAGE_PATH.SERVICE}/${PAGE_PATH.CREATE_SPACE}`);
  };

  const handleCancel = () => {
    setIsAlertOpen(false);
  };

  return (
    <S.Container>
      <S.Title>서비스 이용</S.Title>
      <S.Content>
        <S.InviteSection>
          <S.InviteTitle>가족에게 초대링크를 받았어요!</S.InviteTitle>
          <S.Card bgColor={S.BgColor.YELLOW}>
            <S.Picture>그림</S.Picture>
            <S.CardContent>
              <S.CardTitle>
                초대 받은 가족 공간
                <br />
                들어가기
              </S.CardTitle>
              <S.Button bgColor={S.BgColor.YELLOW}>
                <CustomButton
                  btnType='primary'
                  label='초대링크 입력'
                  icon={<AiOutlineArrowRight />}
                  onClick={handleInvitationLinkClick}
                />
              </S.Button>
            </S.CardContent>
          </S.Card>
        </S.InviteSection>
        <S.CreateSection>
          <S.CreateTitle>새로운 가족 공간을 만들고 싶어요.</S.CreateTitle>
          <S.Card bgColor={S.BgColor.WHITE}>
            <S.Picture>그림</S.Picture>
            <S.CardContent>
              <S.CardTitle>
                새로운 가족 공간
                <br />
                만들기
              </S.CardTitle>
              <S.Button bgColor={S.BgColor.WHITE}>
                <CustomButton
                  btnType='primary'
                  label='가족 공간 만들기'
                  icon={<AiOutlineArrowRight />}
                  onClick={handleCreateSpaceClick}
                />
              </S.Button>
            </S.CardContent>
          </S.Card>
        </S.CreateSection>
      </S.Content>
      <S.SubContent>
        <S.SubTitle>아직 계정이 없어요!</S.SubTitle>
        <S.Button bgColor={S.BgColor.YELLOW}>
          <CustomButton btnType='primary' label='회원가입 하러가기' />
        </S.Button>
      </S.SubContent>
      <S.HelpSection>
        <S.HelpContent>
          <S.HelpTitle>도와줘요!</S.HelpTitle>
          <S.HelpExplain>가족같은 서비스 이용 전 참고해주세요.</S.HelpExplain>
        </S.HelpContent>
        <S.HelpList>
          <S.HelpMain>회원가입</S.HelpMain>
          <S.HelpItem>계정이 없는데 가족에게 초대 링크를 받았어요.</S.HelpItem>
          <S.HelpMain>서비스 이용</S.HelpMain>
          <S.HelpItem>새로운 가족 공간을 만들고 싶어요.</S.HelpItem>
          <S.HelpMain>회원가입</S.HelpMain>
          <S.HelpItem>계정이 없는데 가족에게 초대 링크를 받았어요.</S.HelpItem>
          <S.HelpMain>서비스 이용</S.HelpMain>
          <S.HelpItem>새로운 가족 공간을 만들고 싶어요.</S.HelpItem>
        </S.HelpList>
      </S.HelpSection>
      <Alert
        message='이미 초대된 가족 공간으로 이동합니다.'
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isOpen={isAlertOpen}
      />
    </S.Container>
  );
};

export default ServiceMainPage;
