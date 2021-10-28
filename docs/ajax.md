# Some common functions for ajax call

## Basic Setup
1. Constructor
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax()`</p>

__note__: No parameters are needed. If called as function object will be returned;

2. Define url
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().path(path: string)`</p>

__note__: if this method is not called then default would be `/`. Returns this object.

3. Setting headers
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().header(name: string, value: string)`</p>

__note__: Return this object.

4. Set handling based on status code
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().on(status: int, function: function)`</p>

__note__: Return this object.

5. Set handling based on status code
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().isAsync(isAasync: boolean)`</p>

__note__: Return this object.

6. Set entire data object
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().data(d: object)`</p>

__note__: Return this object.

7. Add individual data
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().add = function (name: string, value: string)`</p>

__note__: Return this object.
	
8. Define submit method
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().method(m: string)`</p>

__note__: Return this object.		

9. Whether response body will be processed or not
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().transform(b: boolean)`</p>


## Make Http call

1. Submit data as JSON body
&nbsp;&nbsp;&nbsp;&nbsp;<p>`json()`</p>

__note__: Cannot be submitted as GET method.

2. Submit data as old fashioned post method
&nbsp;&nbsp;&nbsp;&nbsp;<p>`post()`</p>

__note__: whatever method was set, will be changed to POST

3. Submit data as old fashioned post method
&nbsp;&nbsp;&nbsp;&nbsp;<p>`new Ajax().get()`</p>


## Respoonse handling

1. Define how to handle on successful call.
&nbsp;&nbsp;&nbsp;&nbsp;<p>`success(fnc: function)`</p>

__note__: return this object

2. Define how to handle on error call.
&nbsp;&nbsp;&nbsp;&nbsp;<p>`error(fnc: function)`</p>

> return this object

3. Define post process handle.
&nbsp;&nbsp;&nbsp;&nbsp;<p>`after(fnc: function)`</p>

__note__: return this object

## Handling function parameters

```javascript
function func(body: {XML Object, JavaScript Object, raw(string or otherwise)}, headerMap: JavaScript Object, {status: status: int, rawBody: bodyOriginal: string, rawHeader: headerDump: string});
```


## Additional note on success handling

1. If both 2xx and sucess is declared both of them will be called. 2xx will get higher priority
2. Currently xml and json data is being parsed to object


## Additional note on error handling
1. IF Error Handling by status code and error() is set both of them will be called. Status code method will get higher priority
2. Currently xml and json data is being parsed to object
3. If parsing failed then success will not be called even if server response 2xx; only error will be called. 
