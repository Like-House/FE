import * as S from './Dtype.style';

import theme from '@/theme/theme';
import { GoDotFill } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { SlPresent } from 'react-icons/sl';
import { IoSquare } from 'react-icons/io5';

const Dtype = ({ dtype, mini }) => {
	const getIcon = dtype => {
		if (dtype === '생일') {
			return (
				<SlPresent
					color={theme.COLOR.YELLOW.YELLOW_800}
					size={mini ? 15 : 30}
				/>
			);
		}
		if (dtype === '가족 행사') {
			return (
				<FaStar color={theme.COLOR.YELLOW.YELLOW_500} size={mini ? 15 : 30} />
			);
		}
		if (dtype === '개인 일정') {
			return <GoDotFill size={mini ? 20 : 40} />;
		}
		if (dtype === '기일') {
			return <IoSquare size={mini ? 10 : 25} className="icon" />;
		}
		return null;
	};
	return (
		<S.Container>
			<p>{getIcon(dtype)}</p>
		</S.Container>
	);
};

export default Dtype;
