import './Button.css';

const Button = ({ onClick, className, value }) => {
	return <div onClick={onClick} className={className} data-name={value}>{value}</div>
}

export default Button