import { setHeader } from '../../utils/index.js';

const MainPage = () => {
	setHeader('Authorization', 'hi');
	return <div>Main Page</div>;
};

export default MainPage;
