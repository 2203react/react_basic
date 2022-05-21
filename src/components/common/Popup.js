import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	useEffect(() => {
		let isScroll = null;

		open ? (isScroll = 'hidden') : (isScroll = 'auto');
		document.body.style.overflow = isScroll;

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [open]);

	return (
		<AnimatePresence>
			{open && (
				<motion.aside
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, scale: 0 }}
					className='popup'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
						exit={{ opacity: 0 }}
						className='con'>
						{props.children}
					</motion.div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Popup;
