import * as S from './Avatar.style';

const Avatar = ({ src, size='md', shape='circle', onClick}) => {
	if (!src) {
		return null;
	}
	return <S.Image src={src} size={size} shape={shape} onClick={onClick}/>;
};

export default Avatar;
