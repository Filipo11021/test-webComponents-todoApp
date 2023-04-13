import template from "./todo-item.html?raw";

export class TodoItem extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.innerHTML = template;

		const removeBtn =
			shadowRoot.querySelector<HTMLButtonElement>(".remove-btn");
		if (!removeBtn) throw Error("removeBtn should exist");

		removeBtn.addEventListener("click", () => {
			this.remove();
		});
	}
}

customElements.define("todo-item", TodoItem);
