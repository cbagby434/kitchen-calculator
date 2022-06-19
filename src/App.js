import React, {useState} from 'react';

import Wrapper from './components/Wrapper';
import TitleBar from './components/TitleBar';
import ButtonBar from './components/ButtonBar'
import Button from './components/Button';
import CalcBox from './components/calculate/CalcBox';

const btnVals = ['Volume', 'Weight', 'Time', 'Temp', 'Special'];

const App = () => {

  let [measurementType, setMeasurementType] = useState('Volume')
  console.log(measurementType)

  let handleMeasurementTypeChange = (e) => {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    setMeasurementType(e.target.innerHTML);
    e.target.classList.add('selected');
  }

  //<DropDown onChange={handleFruitChange}> 

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
      <CalcBox measurementType={measurementType} />
    </Wrapper>
  );
}

export default App;
