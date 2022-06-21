import React, {useState} from 'react';
import Wrapper from './components/Wrapper';
import TitleBar from './components/TitleBar';
import ButtonBar from './components/ButtonBar'
import CalcBox from './components/calculate/CalcBox';
import measurementStates from './js/measurementStates.js'

const App = () => {

  const [measurementType, setMeasurementType] = useState('Volume');
  let [compIn, setCompInValue] = useState(0)
  let [compOut, setCompOutValue] = useState(0)
  let [inMeasurement, setInMeasurement] = useState('teaspoon');
  let [outMeasurement, setOutMeasurement] = useState('teaspoon'); 

  let handleMeasurementTypeChange = (e) => {
    console.log('---handleMeasurementTypeChange called from App.js---')
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    setMeasurementType(e.target.innerHTML);
    e.target.classList.add('selected');
    setCompInValue(0);
    setCompOutValue(0);
    setInMeasurement(measurementStates[e.target.innerHTML].measurements[0])
    setOutMeasurement(measurementStates[e.target.innerHTML].measurements[0])
  }

  return (
    <Wrapper>
      <TitleBar appTitle="Kitchen Calculator"></TitleBar>
      <ButtonBar handleMeasurementTypeChange={handleMeasurementTypeChange} />
      <CalcBox
        inMeasurement={inMeasurement}
        setInMeasurement={setInMeasurement}
        outMeasurement={outMeasurement}
        setOutMeasurement={setOutMeasurement}
        compIn={compIn}
        setCompInValue={setCompInValue}
        compOut={compOut}
        setCompOutValue={setCompOutValue} 
        measurementType={measurementType} />
    </Wrapper>
  );
}

export default App;
