import styled from 'styled-components';
import theme from '../../../../theme/theme';
import { FONT_SIZE } from '../../../../constants';

const AlertConatainer = styled.div`
	${theme.ALIGN.ROW_CENTER};
	justify-content: space-between;
	width: 100%;
	padding: 30px 40px;
`;

const AlertContent = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	flex-direction: row;
`;

const AlertInformation = styled.div`
	margin-left: 20px;
`;

const AlertSender = styled.div`
	font-size: ${FONT_SIZE.XL};
`;

const AlertMessage = styled.div`
	font-size: ${FONT_SIZE.LG};
`;

const AlertDate = styled.div`
	font-size: ${FONT_SIZE.SM};
	color: ${theme.COLOR.GRAY.GRAY_450};
`;

const AlertIcon = styled.div`
	width: 28;
	height: 28;
`;

export {
	AlertConatainer,
	AlertContent,
	AlertInformation,
	AlertSender,
	AlertMessage,
	AlertDate,
	AlertIcon,
};
