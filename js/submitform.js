// we do not need more than one object
const FORM_SUBMIT_VER = "1.0.0";

function __form_submit() {
	return new function() {
		let form = null;
		this.value = function(name, val) {
			let input = document.createElement("input");
			input.type = "hidden";
			input.name = name;
			input.value = val;
			form.appendChild(input);
			return this;
		}
		this.target = function(target) {
			form.target = target;
		}
		this.url = this.action = function(action) {
			form.action = action;
			return this;
		}

		this.method = function(method) {
			form.method = method;
			return this;
		}
		
		/*
		 * 
		 *
		 * */
		this.reset = function() {
			form.innerHTML = "";
			return this;
		}

		let create = function() {
			form = document.createElement("form");
			form.style.display = "none";
			form.id = window.URL.createObjectURL(new Blob([])).substr(-36);

		}

		this.submit = function() {
			document.body.appendChild(form);
			form.submit();
		}

		this.post = function() {
			form.method = Methods.POST;
			document.body.appendChild(form);
			form.submit();
		}

		this.get = function() {
			form.method = Methods.GET;
			document.body.appendChild(form);
			form.submit();
		}
		create();
	}
}

const FormSubmit = __form_submit();
