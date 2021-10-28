// we do not need more than one object
const FORM_SUBMIT_VER = "1.0.0";

function __form_submit() {
	return new function() {
		let form = document.createElement("form");
		form.style.display = "none";
		form.id = window.URL.createObjectURL(new Blob([])).substr(-36);
		document.body.appendChild(form);

		this.value = function(name, val) {
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
			this.method = Methods.POST;
			form.submit();
		}

		this.get = function() {
			this.method = Methods.GET;
			form.submit();
		}
	}
}

const FormSubmit = __form_submit();