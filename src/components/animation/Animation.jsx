import { motion } from 'framer-motion';

const Animation = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 200 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				ease: 'easeInOut',
				duration: 2,
				y: { duration: 1 },
			}}
		>
			<div>{children}</div>
		</motion.div>
	);
};

export default Animation;
