import * as S from './UserBox.style';
import { CustomButton, Avatar } from '../../';
import theme from '../../../theme/theme';
import useGetFamilyImg from '../../../hooks/queries/family/useGetFamilyImg';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../../constants/path';

const { COLOR } = theme;

const UserBox = ({ member, handleOpenModal, block }) => {
  const { data } = useGetFamilyImg(member.profileImage, member.userId);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`${PAGE_PATH.HOME}/${PAGE_PATH.FAMILY}`);
  };

  return (
    <S.FamilyMember>
      <S.MemberInfo>
        <Avatar
          src={data?.url}
          size='md'
          shape='circle'
          alt={`${member.name} avatar`}
        />
        <S.MemberDetails>
          <S.MemberName>{member.name}</S.MemberName>
          <S.MemberRole>{member.nickname}</S.MemberRole>
        </S.MemberDetails>
      </S.MemberInfo>
      <S.Actions>
        <CustomButton
          btnType='secondary'
          label='정보 수정'
          onClick={handleEditClick}
        />
        <CustomButton
          btnType='outline'
          outlineColor={COLOR.MAIN.YELLOW}
          label={block ? '차단' : '차단 해제'}
          onClick={
            block
              ? () => handleOpenModal(member, 'block')
              : () => handleOpenModal(member, 'unblock')
          }
        />
      </S.Actions>
    </S.FamilyMember>
  );
};

export default UserBox;
