import './Button.css';

const Button = ({ className, value }) => {
	return <div className={className}>{value}</div>
}

export default Button