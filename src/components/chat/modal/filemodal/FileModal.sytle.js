import { FONT_SIZE } from '@/constants';
import theme from '@/theme/theme';
import { styled } from 'styled-components';

const Container = styled.div`
	${theme.ALIGN.ROW_CENTER};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 999;
	background: rgba(0, 0, 0, 0.5);
	display: ${props => (props.$fileModal ? '' : 'none')};
`;

const Wrapper = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	position: relative;
	z-index: 1000;
	background-color: ${theme.COLOR.COMMON.WHITE};
	border-radius: 30px;
	width: 600px;
	height: 350px;

	.close {
		position: absolute;
		cursor: pointer;
		top: 30px;
		left: 30px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 350px;
		height: 500px;
	}
`;

const Content = styled.div`
	p {
		font-size: ${FONT_SIZE.SM};
		margin-bottom: 10px;
		word-break: keep-all;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		p {
			font-size: ${FONT_SIZE.XS};
		}
	}
`;

const FileInput = styled.input`
	display: none;
`;

const ImgContainer = styled.div`
	${theme.ALIGN.ROW_CENTER};
	flex-wrap: wrap;
	width: 500px;
	height: 170px;
	border: 1px solid ${theme.COLOR.COMMON.BLACK};
	border-style: dashed;
	overflow-y: auto;

	label {
		font-size: ${FONT_SIZE.SM};
		cursor: pointer;
		&:hover {
			font-weight: bold;
		}
	}

	img {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 10px;
		margin: 5px;
	}

	@media ${theme.WINDOW_SIZE.MOBILE} {
		width: 300px;
		height: 300px;
	}
`;

const BtnWrapper = styled.div`
	position: absolute;
	bottom: 20px;
	right: 50px;
	display: flex;

	button {
		margin-left: 10px;
		font-size: ${FONT_SIZE.XS};
		padding: 10px;
		width: 80px;
	}
`;

export { Container, Wrapper, Content, FileInput, ImgContainer, BtnWrapper };
