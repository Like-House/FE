import * as S from './Avatar.style';

const Avatar = ({ src, size, shape }) => {
	return <S.Image src={src} size={size} shape={shape} />;
};

export default Avatar;
