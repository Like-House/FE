import * as S from "./Avatar.style";

const Avatar = ({ src, size }) => {
  return <S.Image src={src} size={size} />;
};

export default Avatar;
