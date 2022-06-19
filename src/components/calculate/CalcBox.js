import {useState} from 'react';
import './CalcBox.css';
import CalcComp from './CalcComp';
import TextBox from './TextBox';
import DropDown from './DropDown';
import Equals from './Equals';
import calcConv from '../../js/calc.js'

const CalcBox = ({ measurementType }) => {
	let options = null;

	let [compIn, setCompInValue] = useState(0)
	let [compOut, setCompOutValue] = useState(0)
	let [inMeasurement, setInMeasurement] = useState('tsp');
  	let [outMeasurement, setOutMeasurement] = useState('tsp');

	const measurementStates = {
	    'Volume': {
	      measurements:['tsp', 'tbsp', 'cup', 'oz', 'pt', 'qt', 'g', 'ml', 'L']
	    },
	    'Weight': {
	      measurements:['g', 'kg', 'lb', 'oz']
	    },
	    'Time': {
	      measurements:['sec', 'min', 'hr', 'day']
	    },
	    'Temp': {
	      measurements:['C', 'F']
	    },
	    'Special': {
	      measurements:['dash']
	    }
	}
	switch(measurementType){
	    case 'Volume':
	      options = measurementStates['Volume'].measurements.map((el) => <option key={el}>{el}</option>);
	      break;
	    case 'Weight':
	      options = measurementStates['Weight'].measurements.map((el) => <option key={el}>{el}</option>);
	      break;
	    case 'Time':
	      options = measurementStates['Time'].measurements.map((el) => <option key={el}>{el}</option>);
	      break;
	    case 'Temp':
	      options = measurementStates['Temp'].measurements.map((el) => <option key={el}>{el}</option>);
	      break;
	    case 'Special':
	      options = measurementStates['Special'].measurements.map((el) => <option key={el}>{el}</option>);
	      break;
	}

	let handleTextBoxChange = (e) => {
		let targetClass = e.target.parentNode.classList[1];
		let thisBox = 'comp'+targetClass.charAt(0).toUpperCase()+targetClass.slice(1);
		let oppositeBox = thisBox === 'compIn' ? 'compOut' : 'compIn';
		let inValue, outValue;

		/*console.log(e.target.classList[1]);
		console.log(e.target.value);
		console.log(thisBox, oppositeBox);*/

		switch(thisBox){
			case 'compIn':
				setCompInValue(e.target.value);
				outValue = calcConv(measurementType, inMeasurement, outMeasurement, e.target.value);
				setCompOutValue(outValue);
				break;
			case 'compOut':
				setCompOutValue(e.target.value);
				inValue = calcConv(measurementType, outMeasurement, inMeasurement, e.target.value);
				setCompInValue(inValue);
				break;
		}

		
	}

	let handleDropDownChange = (e) => {
		let targetClass = e.target.parentNode.classList[1];
		let thisBox = 'comp'+targetClass.charAt(0).toUpperCase()+targetClass.slice(1);
		let inValue, outValue;

		switch(thisBox){
			case 'compIn':
				setInMeasurement(e.target.value);
				outValue = calcConv(measurementType, e.target.value, outMeasurement, compIn);
				setCompOutValue(outValue);
				break;
			case 'compOut':
				setOutMeasurement(e.target.value);
				inValue = calcConv(measurementType, e.target.value, inMeasurement, compOut);
				setCompInValue(inValue);
				break;
		}
	}


	return (
		<div className="calcBox">
			<CalcComp className="calcComp in">
	        	<TextBox onChange={handleTextBoxChange} className="textBox" value={compIn}/>
	        	<DropDown onChange={handleDropDownChange}> 
	        		{
	              		options
	            	}
	          	</DropDown>        
	        </CalcComp>
	        <Equals />
	        <CalcComp className="calcComp out">
	          	<TextBox onChange={handleTextBoxChange} className="textBox" value={compOut}/>
	          	<DropDown onChange={handleDropDownChange}>
		            {
		              options
		            }
	          	</DropDown>
	        </CalcComp>
        </div>
	)
}

export default CalcBox;