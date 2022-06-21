import	'./DropDown.css';

let onSelect = () => {
	console.log(onSelect)
}

const DropDown = ({ children, onChange }) => {
	return <select className='dropDown' onChange={onChange}>{children}</select>
}

export default DropDown