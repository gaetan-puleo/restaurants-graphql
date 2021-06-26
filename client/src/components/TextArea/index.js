import React from 'react';
import styles from './index.module.scss';

export default function TextArea (props) {
	const {value, onChange, label, placeholder = ''} = props

	return (
		<div>
			<label className={styles.label}>{label}</label>
			<textarea placeholder={placeholder} className={styles.input} onChange={onChange} value={value}></textarea>
		</div>
	)
}
