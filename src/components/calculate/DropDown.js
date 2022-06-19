import	'./DropDown.css';

const DropDown = ({ children, onChange }) => {
	return <select className='dropDown' onChange={onChange}>{children}</select>
}

export default DropDown