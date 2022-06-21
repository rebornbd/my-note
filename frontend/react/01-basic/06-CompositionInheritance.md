# Composition vs Inheritance

#### helping functions
```js
// UserNameForm.js
import React from "react";
export default class UserNameForm extends React.Component {
	render() {
		return (
			<div>
				<input type="text" />
			</div>
		);
	}
}
```

## Class component | Inheritance
```js
import React from "react";
import UserNameForm from "./UserNameForm";

class CreateUserName extends UserNameForm {
	render() {
		const parent = super.render();
		return (
			<div>
				{parent}
				<button>Create</button>
			</div>
		)
	}
}

class UpdateUserName extends UserNameForm {
	render() {
		const parent = super.render();
		return (
			<div>
				{parent}
				<button>Update</button>
			</div>
		)
	}
}


ReactDOM.render(
   (<div>
      < CreateUserName />
      < UpdateUserName />
   </div>), document.getElementById('root')
);
```


## Class component | Composition
#### `.js`
```js
import React from "react";
import UserNameForm from "./UserNameForm";

class CreateUserName extends React.Component {
	render() {
		return (
			<div>
				< UserNameForm />
				<button>Create</button>
			</div>
		)
	}
}

class UpdateUserName extends React.Component {
	render() {
		return (
			<div>
				< UserNameForm />
				<button>Update</button>
			</div>
		)
	}
}


ReactDOM.render(
	(<div>
		<CreateUserName />
		<UpdateUserName />
	</div>), document.getElementById('root')
);
```
