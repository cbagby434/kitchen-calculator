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

const App = () => {
  return (
    <Wrapper>
      <TitleBar appTitle="Kitchen Calculator"></TitleBar>
      <ButtonBar>
        {
          btnVals.map((btn, i) => {
            return (
              <Button
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
          <DropDown></DropDown>
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
