# FormSubmit

### Written to submit to a target page without writing a form elemen in html.

### One *FormSubmit* object is created. A second object should not be needed.

1. *FormSubmit.setValue(name, value)*
&nbsp;&nbsp;&nbsp;&nbsp;<p>To add a value to submit </p>

1. *FormSubmit.url(action), FormSubmit.action(action)*
&nbsp;&nbsp;&nbsp;&nbsp;<p>Sumit page</p>

1. *FormSubmit.method(action)*
&nbsp;&nbsp;&nbsp;&nbsp;<p>Only GET and POST should be used. If *FormSubmit.post* or *FormSubmit.get* is called, this method can be ignored</p>

1. *FormSubmit.submit()*
&nbsp;&nbsp;&nbsp;&nbsp;<p>Will trigger form submit. Cannot be canceled. if no method is set then will be sumitted as GET</p>

1. *FormSubmit.post()*
&nbsp;&nbsp;&nbsp;&nbsp;<p>Will trigger form submit as POST. Cannot be canceled.</p>

1. *FormSubmit.get()*
&nbsp;&nbsp;&nbsp;&nbsp;<p>Will trigger form submit as GET. Cannot be canceled.</p>
