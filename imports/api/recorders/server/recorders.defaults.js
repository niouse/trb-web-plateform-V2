let recorder = {
	name : "default",
	isPrivate : false,
	location : "laboratoire",
	isOnRecord : false,
	lastValue : 0,
	serie : {
		_id : "serie1",
		name : "54N06_0008",
		unity : "°C",
		codeProd : "54N06",
		numDep : "0008",
		maxValue : 0,
		startedAt : new Date(),
		timeToMax : 0,
		data : []
	}
}

export default function getRecorders(number){
	var recorderDefaults = []
	for (var i=0; i<number; i++){
		let newRecorder = Object.assign({}, recorder)
		let recorderNumber = i+1
			newRecorder.name = "TC"+ recorderNumber
			
			newRecorder.serie = {
			_id : "serie"+ recorderNumber,
			name : "33B02_00"+recorderNumber,
			unity : "°C",
			codeProd : "33B02",
			numDep : "00"+recorderNumber,
			maxValue : 0,
			startedAt : new Date(),
			timeToMax : 0,
			data : []
		}
		recorderDefaults.push(newRecorder)
	}
	return recorderDefaults
}

