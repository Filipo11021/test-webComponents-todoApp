import "./add-todo/add-todo";
import "./display-todos/display-todos";

import template from "./todo-app.html?raw";

export class TodoApp extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.innerHTML = template;
	}
}

customElements.define("todo-app", TodoApp);
