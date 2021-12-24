import styles from './ShimmerEffect.module.css';

function ShimmerEffect({ className = '' }) {
	return <div className={`${styles.shimmerEffect} ${className}`}></div>;
}

export default ShimmerEffect;
