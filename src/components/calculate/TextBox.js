import './TextBox.css';

const TextBox = ({className, value, onChange}) => {
	return <input type="number" className={className} onChange={onChange} value={value} />
}

export default TextBox;