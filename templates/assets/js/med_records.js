var MedRecords = (function(window) {
	var me = {};

	me.salute = function() {  console.log("huzzah from MR") }

	me.med_record_metadata = function() {
		return [
			{ name: "date", label:"Date", datatype: "date", editable: true },
			{ name: "systolic", label:"Systolic BP", datatype: "integer", editable: true },
			{ name: "diastolic", label: "Diastolic BP", datatype: "integer", editable: true },
			{ name: "pulse", label: "Pulse (bpm)", datatype: "integer", editable: true },
			{ name: "weight", label: "Weight", datatype: "integer", editable: true },
		];
	}

	me.all_records = function() {
		return _get_stock_med_records();
	}
	
	//----------------------------------------------------------------------
	// PRIVATE API STARTS HERE
	//
	function _get_stock_med_records () {
		console.log("entering get_grid_data");
		
		var d = [
			{  id : 1, values : { "date" : "2013-02-01", "systolic" : 130, "diastolic" : 70, "pulse" : 53, "weight" : 192 }},
			{  id : 2, values : { "date" : "2013-02-02", "systolic" : 123, "diastolic" : 65, "pulse" : 57, "weight" : 192 }},
			{  id : 3, values : { "date" : "2013-02-03", "systolic" : 127, "diastolic" : 80, "pulse" : 65, "weight" : 193 }},
			{  id : 4, values : { "date" : "2013-02-05", "systolic" : 130, "diastolic" : 80, "pulse" : 49, "weight" : 193 }},
			{  id : 5, values : { "date" : "2013-02-07", "systolic" : 145, "diastolic" : 74, "pulse" : 51, "weight" : 192 }},
		];
		
		var result = { metadata : me.med_record_metadata(), data : d };
		return result;
	}
	
	
	return me;
})(window);


