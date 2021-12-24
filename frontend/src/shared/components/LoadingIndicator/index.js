import styles from './LoadingIndicator.module.css';

function LoadingIndicator({ className = '' }) {
	return (
		<div className={`${styles.loadingIndicator} ${className}`}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default LoadingIndicator;
