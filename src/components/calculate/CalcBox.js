import {useState} from 'react';
import './CalcBox.css';
import CalcComp from './CalcComp';
import TextBox from './TextBox';
import DropDown from './DropDown';
import Equals from './Equals';
import calcConv from '../../js/calc.js'
import measurementStates from '../../js/measurementStates.js'

const CalcBox = (AppProps) => {
	let optionsIn = null;
	let optionsOut = null;

	let handleCalculations = (handler, elem) => {
		let targetClass = elem.target.parentNode.classList[1];
		let thisBox = 'comp'+targetClass.charAt(0).toUpperCase()+targetClass.slice(1);
		let inValue, outValue, funcInputMeas, funcInputValue;

		switch(thisBox){
			case 'compIn':
				if(handler == 'textBox'){
					AppProps.setCompInValue(elem.target.value);
				} else{
					AppProps.setInMeasurement(elem.target.value);
				}
				funcInputMeas = handler == 'textBox' ? AppProps.inMeasurement : elem.target.value;
				funcInputValue = handler == 'textBox' ? elem.target.value : AppProps.compIn;
				outValue = calcConv(AppProps.measurementType, funcInputMeas, AppProps.outMeasurement, funcInputValue);
				AppProps.setCompOutValue(outValue);
				break;
			case 'compOut':
				if(handler == 'textBox'){
					AppProps.setCompOutValue(elem.target.value);
				} else{
					AppProps.setOutMeasurement(elem.target.value);
				}
				funcInputMeas = handler == 'textBox' ? AppProps.outMeasurement : elem.target.value;
				funcInputValue = handler == 'textBox' ? elem.target.value : AppProps.compOut;
				inValue = calcConv(AppProps.measurementType, funcInputMeas, AppProps.inMeasurement, funcInputValue);
				AppProps.setCompInValue(inValue);
				break;
		}

	}
	let handleTextBoxChange = (e) => {
		console.log('---handleTextBoxChange called---');
		handleCalculations('textBox', e);
	}

	let handleDropDownChange = (e) => {
		console.log('---handleDropDownChange called---')
		handleCalculations('dropDown', e);
	}


	let updateOptions = (measType) => {
		optionsIn = measurementStates[measType].measurements[0].map((el) => <option key={el}>{el}</option>);
		optionsOut = !measurementStates[measType].optionSplit ? optionsIn : measurementStates[measType].measurements[1].map((el) => <option key={el}>{el}</option>);
		console.log(AppProps.inMeasurement, AppProps.outMeasurement)
	}

	switch(AppProps.measurementType){
		case 'Volume':
			updateOptions('Volume')			
			break;
		case 'Weight':
			updateOptions('Weight')
			break;
		case 'Time':
			updateOptions('Time')
			break;
		case 'Temp':
			updateOptions('Temp')
			break;
		case 'Special':
			updateOptions('Special')
			break;
	}


	return (
		<div className="calcBox">
			<CalcComp className="calcComp in">
	        	<TextBox onChange={handleTextBoxChange} className="textBox" value={AppProps.compIn}/>
	        	<DropDown onChange={handleDropDownChange}> 
	        		{optionsIn}
	          	</DropDown>        
	        </CalcComp>
	        <Equals />
	        <CalcComp className="calcComp out">
	          	<TextBox onChange={handleTextBoxChange} className="textBox" value={AppProps.compOut}/>
	          	<DropDown onChange={handleDropDownChange}>
		            {optionsOut}
	          	</DropDown>
	        </CalcComp>
        </div>
	)
}

export default CalcBox;