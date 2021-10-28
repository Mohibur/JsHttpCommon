const AJAX_VER = "1.0.0"

Ajax = function () {
	if(this == window) {
		return new Ajax(url);
	}

	const ERROR_METHOD = "error";
	const SUCCESS_METHOD = "success";
	const AFTER_METHOD = "after";

	var xmlhttp = new XMLHttpRequest();
	var allData = {};
	var url = "/";
	var asynchronous  = true;
	// all response would be registerd
	var responseAction = {};
	var subMethod = Methods.GET;

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
		responseCode = responseCode.toString();
		if(! /^[0-9]{3}$/.test(responseCode) ) {
			throw "responseCode is invalid"
		}
		if(typeof fnc != "function") {
			throw "Function is expected as second parameter";
		}

		responseAction[responseCode] = fnc;
		return this;
	}
	
	this.isAsync = function(isAasync) {
		isAasync = isAasync.toString();
		if(isAasync.toString().toLocaleLowerCase() != "true" && isAasync.toString().toLocaleLowerCase() != "false") {
			throw "Either true or false is expected";
		}
		asynchronous = isAasync == "true";
		return this;
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

	function buildString() {
		let ret = [];
		Object.keys(allData).forEach(function(key) {ret.push(encodeURIComponent(key) + "=" + encodeURIComponent(allData[key]))});
		return ret.join("&");
	}

	function process() {
		// Create a map of header names to values
		var headerMap = {};
		var headerDump = xmlhttp.getAllResponseHeaders();
		headerDump.trim().split(/[\r\n]+/).forEach(function (line) {
			var parts = line.split(': ');
			var header = parts.shift();
			var value = parts.join(': ');
			headerMap[header] = value;
		});
		
		var contentType = headerMap["content-type"];
		var body = bodyOriginal = xmlhttp.responseText;
		var postProcessMethod = SUCCESS_METHOD;
		
		// setting mehtod based on success
		if(xmlhttp.status < 200 || xmlhttp.status >= 300) {
			postProcessMethod = ERROR_METHOD;
		}

		// parsing json response
		var parsingError = false;
		if(contentType.toLocaleLowerCase().indexOf("json") > -1) {
			try {
				body = JSON.parse(body);
			} catch (err) {
				body = err;
				postProcessMethod = ERROR_METHOD;
				parsingError = true;
			}
		}

		// error code is high priority
		if(typeof responseAction[xmlhttp.status.toString()] == "function" && !parsingError) {
			responseAction[xmlhttp.status.toString()](body, headerMap, {status: xmlhttp.status, rawBody: bodyOriginal, rawHeader: headerDump});
		}
		// open, error is low priority
		if(typeof responseAction[postProcessMethod] == "function") {
			responseAction[postProcessMethod](body, headerMap, {status: xmlhttp.status, rawBody: bodyOriginal, rawHeader: headerDump});
		}
		// finally
		if(typeof responseAction[AFTER_METHOD] == "function") {
			responseAction[AFTER_METHOD]();
		}
	}

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState === 4) {
			process();
		}
	}

	this.json = function () {
		if(subMethod == Methods.GET) {
			throw "Json data cannot be send with GET request";
		}
		var subString = typeof allData == "string" ? allData : JSON.stringify(allData);
		this.header("Content-Type", MediaType.APPLICATION_JSON_UTF8_VALUE);
		xmlhttp.open(subMethod, url, asynchronous);
		xmlhttp.send(subString);
	}

	this.post = function() {
		subMethod = Methods.POST;
		xmlhttp.open(subMethod, url, asynchronous);
		xmlhttp.send(buildString());
	}

	this.get = function() {
		subMethod = Methods.GET;
		let spls = url.split("?");
		let uri = spls.length > 1 ? spls[1] + "&" : "";
		xmlhttp.open(subMethod, spls[0] + "?" + uri + buildString(), asynchronous);
		xmlhttp.send();
	}

	this.success = function(fnc) {
		if(typeof fnc != "function") {
			throw "have to be a funciton";
		}

		responseAction[SUCCESS_METHOD] = fnc;
		return this;
	}

	this.error = function(fnc) {
		if(typeof fnc != "function") {
			throw "have to be a funciton";
		}

		responseAction[ERROR_METHOD] = fnc;
		return this;
	}
	
	
	this.after = function(fnc) {
		if(typeof fnc != "function") {
			throw "have to be a funciton";
		}
		responseAction[AFTER_METHOD] = fnc;
		return this;
	}

}

