const measurementConversions = {
    'Volume': {
    	'teaspoon': {
			'teaspoon': 1,
			'tablespoon':(1/3),
			'cup': (1/48),
			'fluid ounce': (1/6),
			'pint': (1/96),
			'quart': (1/192),
			'gallon': (1/768),
			'milliliter': 4.929,
			'liter': (1/202.9)
    	},
    	'tablespoon': {
    		'teaspoon': 3,
			'tablespoon':1,
			'cup': (1/16),
			'fluid ounce': (1/2),
			'pint': (1/32),
			'quart': (1/64),
			'gallon': (1/256),
			'milliliter': 14.787,
			'liter': (1/67.628)
    	},
    	'cup':{
    		'teaspoon': 48,
			'tablespoon': 16,
			'cup': 1,
			'fluid ounce': 8,
			'pint': (1/2),
			'quart': (1/4),
			'gallon': (1/16),
			'milliliter': 236.6,
			'liter': (1/4.227)
    	},
    	'fluid ounce':{
    		'teaspoon': 6,
			'tablespoon': 2,
			'cup': 8,
			'fluid ounce': 1,
			'pint': (1/16),
			'quart': (1/32),
			'gallon': (1/128),
			'milliliter': 29.574,
			'liter': (1/33.814)
    	},
    	'pint':{
    		'teaspoon': 96,
			'tablespoon': 32,
			'cup': 2,
			'fluid ounce': 16,
			'pint': 1,
			'quart': (1/2),
			'gallon': (1/8),
			'milliliter': 473.2,
			'liter': (1/2.113)
    	},
    	'quart':{
    		'teaspoon': 192,
			'tablespoon': 64,
			'cup': 4,
			'fluid ounce': 32,
			'pint': 2,
			'quart': 1,
			'gallon': (1/4),
			'milliliter': 946.4,
			'liter': (1/1.057)
    	},
    	'gallon':{
    		'teaspoon': 768,
			'tablespoon': 256,
			'cup': 16,
			'fluid ounce': 128,
			'pint': 8,
			'quart': 4,
			'gallon': 1,
			'milliliter': 3785.41,
			'liter': 3.78541
    	},
    	'milliliter':{
    		'teaspoon': (1/4.929),
			'tablespoon':(1/14.787),
			'cup': (1/236.6),
			'fluid ounce': (1/29.574),
			'pint': (1/473.2),
			'quart': (1/946.4),
			'gallon': (1/3785),
			'milliliter': 1,
			'liter': (1/1000)
    	},
    	'liter':{
    		'teaspoon': 202.9,
			'tablespoon':67.628,
			'cup': 4.227,
			'fluid ounce': 33.814,
			'pint': 2.113,
			'quart': 1.057,
			'gallon': (1/3.785),
			'milliliter': 1000,
			'liter': 1
    	}
    },
    'Weight': {
    	'gram':{
    		'gram': 1,
    		'kilogram': (1/1000),
    		'pound': (1/453.6),
    		'ounce': (1/28.35)
    	},
    	'kilogram':{
    		'gram': 1000,
    		'kilogram': 1,
    		'pound': 2.205,
    		'ounce': 35.274
    	},
    	'pound':{
    		'gram': 453.6,
    		'kilogram': (1/2.205),
    		'pound': 1,
    		'ounce': 16
    	},
    	'ounce':{
    		'gram': 28.35,
    		'kilogram': (1/35.274),
    		'pound': (1/16),
    		'ounce': 1
    	}
    },
    'Time': {
    	'second':{
    		'second': 1,
    		'minute': (1/60),
    		'hour': (1/3600),
    		'day': 1/86400
    	},
    	'minute':{
    		'second': 60,
    		'minute': 1,
    		'hour': (1/60),
    		'day': (1/1440)
    	},
    	'hour':{
    		'second': 3600,
    		'minute': 60,
    		'hour': 1,
    		'day': 24
    	},
    	'day':{
    		'second': 86400,
    		'minute': 1440,
    		'hour': 24,
    		'day': 1
    	}
    },
    'Temp': {
    	newTemp: function(tempIn, tempOut, tempVal){
    		if (tempOut === tempIn) {
    			return tempVal;
    		}
    		if (tempIn === 'Celsius') {
    			return ((tempVal * 9/5) + 32);
    		} else{
    			return ((tempVal - 32) * 5/9);
    		}
    	}
    },
    'Special': {
      measurements:['dash']
    }
}

const calcConv = (type, inMeas, outMeas, inVal) => {
	if(type == 'Temp'){
		return measurementConversions[type].newTemp(inMeas, outMeas, inVal);
	}
	const convFactor = measurementConversions[type][inMeas][outMeas];
	const outVal = inVal * convFactor; 
	console.log('Measurement Type: ', type,'\n','Input Measurement: ', inMeas,'\n', 'Output Measurement: ', outMeas,'\n', 'Input Value: ', inVal,'\n', 'Output Value: ',outVal,'\n');
	return outVal;
}

export default calcConv;