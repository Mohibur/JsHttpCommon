const AJAX_VER = "1.0.0"

Ajax = function () {
	if(this == window) {
		return new Ajax(url);
	}

	var xmlhttp = null;
	var allData = {};
	var url = null;
	// all response would be registerd
	var responseAction = {};
	var subMeth = Methods.GET;

	this.path = function(u) {
		url = u;
		return this;
	}

	this.submit = function() {
		console.log(url);
	}

	this.header = function(name, value) {
		if(xmlhttp == null) throw "URL should be set first";
		xmlhttp.setRequestHeader(name, value);
		return this;
	}
	
	this.on = function(responseCode, fnc) {
		reponseCode = reponseCode.toString();
		if(! /^[0-9]{3}$/.test(responseCode) ) {
			throw "responseCode is invalid"
		}
		if(typeof fnc != "function") {
			throw "Function is expected as second parameter";
		}

		responseAction[reponseCode] = fnc;
	}
	
	this.data = function(d) {
		allData = d;
		return this;
	}
	
	this.addData = function (name, value) {
		if(typeof allData != "object") {
			throw "data type does not match"
		}
		allData[name.toString()] = value;
		return this;
	}
	
	this.method = function (m) {
		subMeth = m.toString();
		return this;
	}

	function processAfterSumit() {
		
	}
	
	
	function bodySubmit(subString) {
		
	}

	

	this.json = function () {
		if(subMethod == Methods.GET) {
			throw "Json data cannot be send with GET request";
		}
		var subString = typeof allData == "string" ? allData : JSON.stringify(allData);
		this.header("Content-Type", MediaType.APPLICATION_JSON_UTF8_VALUE);
		xmlhttp.open(method, url);
		xmlhttp.send(subString);
		processAfterSumit()
	}

	this.post = function() {
		
	}

}

