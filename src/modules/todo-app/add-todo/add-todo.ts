import { todosObservable } from "../todo-app.observable";
import template from "./add-todo.html?raw";

function addTodoHandler(e: SubmitEvent) {
	e.preventDefault();
	const form = e.currentTarget as HTMLFormElement;

	const formData = new FormData(form);
	const task = formData.get("task");

	todosObservable.notify({
		task: String(task),
	});

	form.reset();
}

class AddTodo extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.innerHTML = template;

		const addTodoForm = shadowRoot.querySelector<HTMLFormElement>(".add-todo");
		if (!addTodoForm) throw Error("addTodoForm should exist");

		addTodoForm.addEventListener("submit", addTodoHandler);
	}
}

customElements.define("add-todo", AddTodo);
