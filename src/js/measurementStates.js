const measurementStates = {
    'Volume': {
    	optionSplit:false,
      measurements:[['teaspoon', 'tablespoon', 'cup', 'fluid ounce', 'pint', 'quart', 'gallon', 'milliliter', 'liter']]
    },
    'Weight': {
    	optionSplit:false,
      measurements:[['gram', 'kilogram', 'pound', 'ounce']]
    },
    'Time': {
    	optionSplit:false,
      measurements:[['second', 'minute', 'hour', 'day']]
    },
    'Temp': {
    	optionSplit:false,
      measurements:[['Celsius', 'Farenheit']]
    },
    'Special': {
    	optionSplit:true,
    	measurements:[['smidgen','dash', 'clove', 'pinch', 'dollop'], ['teaspoon', 'tablespoon', 'cup', 'fluid ounce']]
    }
}

export default measurementStates;