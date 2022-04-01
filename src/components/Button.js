import './Button.css';

const Button = ({ className, value }) => {
	return <div className={className} data-name={value}>{value}</div>
}

export default Button