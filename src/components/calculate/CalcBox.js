import {useState} from 'react';
import './CalcBox.css';
import CalcComp from './CalcComp';
import TextBox from './TextBox';
import DropDown from './DropDown';
import Equals from './Equals';

const CalcBox = ({ measurementType }) => {
	let options = null;

	const measurementStates = {
	    'Volume': {
	      measurements:['tspn', 'tbsp', 'cup', 'oz', 'pt', 'qt', 'g', 'ml', 'L']
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
		let oppositeBox = e.target.classList[1] === 'firstBox' ? 'secondBox' : 'firstBox';
		
		console.log(e.target.classList[1]);
		console.log(e.target.value);

		// setFruit(e.target.value)
	}


	return (
		<div className="calcBox">
			<CalcComp className="calcComp in">
	        	<TextBox onChange={handleTextBoxChange} className="textBox firstBox"/>
	        	<DropDown> 
	        		{
	              		options
	            	}
	          	</DropDown>        
	        </CalcComp>
	        <Equals />
	        <CalcComp className="calcComp out">
	          	<TextBox onChange={handleTextBoxChange} className="textBox secondBox"/>
	          	<DropDown>
		            {
		              options
		            }
	          	</DropDown>
	        </CalcComp>
        </div>
	)
}

export default CalcBox;