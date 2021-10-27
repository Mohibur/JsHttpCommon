// we do not need more than one object
const FormSubmit = function() {
	return new function() {

		let form = document.createElement("form");
		form.style.display = "none";
		form.id = window.URL.createObjectURL(new Blob([])).substr(-36);
		document.body.appendChild(form);

		this.setValue = function(name, val) {
			let input = document.createElement("input");
			input.type = "hidden";
			input.name = name;
			input.value = val;
			form.appendChild(input);
			return this;
		}
		this.url = this.action = function(action) {
			form.action = action;
			return this;
		}

		this.method = function(method) {
			form.method = method;
			return this;
		}

		this.submit = function() {
			form.submit();
		}

		this.post = function() {
			this.method = "POST";
			form.submit();
		}

		this.get = function() {
			this.method = "GET";
			form.submit();
		}
	}
}();

