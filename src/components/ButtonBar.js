import './ButtonBar.css';
import Button from './Button';

const btnVals = ['Volume', 'Weight', 'Time', 'Temp', 'Special'];

const ButtonBar = ({ handleMeasurementTypeChange }) => {
	return (
		<div className="buttonBar">{
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
        </div>
    )
}

export default ButtonBar;