import React, {useState} from 'react';

import Wrapper from './components/Wrapper';
import TitleBar from './components/TitleBar';
import ButtonBar from './components/ButtonBar'
import Button from './components/Button';
import CalcBox from './components/CalcBox';
import CalcComp from './components/CalcComp';
import TextBox from './components/TextBox';
import DropDown from './components/DropDown';
import Equals from './components/Equals';

const btnVals = ['Volume', 'Weight', 'Time', 'Temp', 'Special'];

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

const App = () => {

  let fruits = [
    { label: "Apple", value: "🍎" },
    { label: "Banana", value: "🍌" },
    { label: "Orange", value: "🍊" }
  ]

  let [fruit, setFruit] = useState("⬇️ Select a fruit ⬇️")
  let [measurementType, setMeasurementType] = useState('Volume')
  console.log(measurementType)

  let handleFruitChange = (e) => {
    setFruit(e.target.value)
  }
  let handleMeasurementTypeChange = (e) => {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    setMeasurementType(e.target.innerHTML);
    e.target.classList.add('selected');
  }

  return (
    <Wrapper>
      <TitleBar appTitle="Kitchen Calculator"></TitleBar>
      <ButtonBar>
        {
          btnVals.map((btn, i) => {
            return (
              <Button
                onClick={handleMeasurementTypeChange}
                className={i === 0 ? 'button first selected' :(i === btnVals.length - 1 ? 'button last' : 'button')}
                key={i}
                value={btn}
               ></Button>
            );
          })
        } 
      </ButtonBar>
      <CalcBox>
        <CalcComp className="calcComp in">
          <TextBox></TextBox>
          <DropDown onChange={handleFruitChange}> 
            <option value="⬇️ Select a fruit ⬇️"> -- Select a fruit -- </option>
            {fruits.map((fruit) => <option key={fruit.label} value={fruit.value}>{fruit.label}</option>)}
          </DropDown>        
        </CalcComp>
        <Equals></Equals>
        <CalcComp className="calcComp out">
          <TextBox></TextBox>
          <DropDown></DropDown>
        </CalcComp>
      </CalcBox>
    </Wrapper>
  );
}

export default App;
