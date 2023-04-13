import "./todo-item";

import template from "./display-todos.html?raw";
import { todosObservable } from "../todo-app.observable";

class DisplayTodos extends HTMLElement {
	todosUnsubscribe: (() => void) | null = null;

	constructor() {
		super();

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.innerHTML = template;
	}

	connectedCallback() {
		this.todosUnsubscribe = todosObservable.subscribe(({ task }) => {
			const todosContainer =
				this.shadowRoot?.querySelector<HTMLDivElement>(".todos");
			if (!todosContainer) throw Error("btn should exist");

			todosContainer.insertAdjacentHTML(
				"afterbegin",
				`<todo-item>${task}</todo-item>`
			);
		});
	}

	disconnectedCallback() {
		this.todosUnsubscribe?.();
	}
}

customElements.define("display-todos", DisplayTodos);
