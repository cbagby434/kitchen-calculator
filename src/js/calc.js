

const measurementConversions = {
    'Volume': {
    	'tsp': {
			'tsp': 1,
			'tbsp':(1/3),
			'cup': (1/48),
			'oz': (1/6),
			'pt': (1/96),
			'qt': (1/192),
			'g': (1/768),
			'ml': 4.929,
			'L': (1/202.9)
    	},
    	'tbsp': {
    		'tsp': 3,
			'tbsp':1,
			'cup': (1/16),
			'oz': (1/2),
			'pt': (1/32),
			'qt': (1/64),
			'g': (1/256),
			'ml': 14.787,
			'L': (1/67.628)
    	},
    	'cup':{
    		'tsp': 48,
			'tbsp': 16,
			'cup': 1,
			'oz': 8,
			'pt': (1/2),
			'qt': (1/4),
			'g': (1/16),
			'ml': 236.6,
			'L': (1/4.227)
    	},
    	'oz':{
    		'tsp': 6,
			'tbsp': 2,
			'cup': 8,
			'oz': 1,
			'pt': (1/16),
			'qt': (1/32),
			'g': (1/128),
			'ml': 29.574,
			'L': (1/33.814)
    	},
    	'pt':{
    		'tsp': 96,
			'tbsp': 32,
			'cup': 2,
			'oz': 16,
			'pt': 1,
			'qt': (1/2),
			'g': (1/8),
			'ml': 473.2,
			'L': (1/2.113)
    	},
    	'qt':{
    		'tsp': 192,
			'tbsp': 64,
			'cup': 4,
			'oz': 32,
			'pt': 2,
			'qt': 1,
			'g': (1/4),
			'ml': 946.4,
			'L': (1/1.057)
    	},
    	'g':{
    		'tsp': 768,
			'tbsp': 256,
			'cup': 16,
			'oz': 128,
			'pt': 8,
			'qt': 4,
			'g': 1,
			'ml': 3785.41,
			'L': 3.78541
    	},
    	'ml':{
    		'tsp': (1/4.929),
			'tbsp':(1/14.787),
			'cup': (1/236.6),
			'oz': (1/29.574),
			'pt': (1/473.2),
			'qt': (1/946.4),
			'g': (1/3785),
			'ml': 1,
			'L': (1/1000)
    	},
    	'L':{
    		'tsp': 202.9,
			'tbsp':67.628,
			'cup': 4.227,
			'oz': 33.814,
			'pt': 2.113,
			'qt': 1.057,
			'g': (1/3.785),
			'ml': 1000,
			'L': 1
    	}
    },
    'Weight': {
    	'g':{
    		'g': 1,
    		'kg': (1/1000),
    		'lb': (1/453.6),
    		'oz': (1/28.35)
    	},
    	'kg':{
    		'g': 1000,
    		'kg': 1,
    		'lb': 2.205,
    		'oz': 35.274
    	},
    	'lb':{
    		'g': 453.6,
    		'kg': (1/2.205),
    		'lb': 1,
    		'oz': 16
    	},
    	'oz':{
    		'g': 28.35,
    		'kg': (1/35.274),
    		'lb': (1/16),
    		'oz': 1
    	}
    },
    'Time': {
    	'sec':{
    		'sec': 1,
    		'min': (1/60),
    		'hr': (1/3600),
    		'day': 1/86400
    	},
    	'min':{
    		'sec': 60,
    		'min': 1,
    		'hr': (1/60),
    		'day': (1/1440)
    	},
    	'hr':{
    		'sec': 3600,
    		'min': 60,
    		'hr': 1,
    		'day': 24
    	},
    	'day':{
    		'sec': 86400,
    		'min': 1440,
    		'hr': 24,
    		'day': 1
    	}
    },
    'Temp': {
    	newTemp: function(tempIn, tempOut, tempVal){
    		if (tempOut === tempIn) {
    			return tempVal;
    		}
    		if (tempIn === 'C') {
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
	const convFactor = measurementConversions[type][inMeas][outMeas];
	const outVal = inVal * convFactor; 
	console.log('Measurement Type: ', type,'\n','Input Measurement: ', inMeas,'\n', 'Output Measurement: ', outMeas,'\n', 'Input Value: ', inVal,'\n', 'Output Value: ',outVal,'\n');
	return outVal;
}

export default calcConv;