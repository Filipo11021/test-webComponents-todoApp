import template from "./my-button.html?raw";

class MyButton extends HTMLElement {
	#internals: ElementInternals;

	static get formAssociated() {
		return true;
	}

	constructor() {
		super();

		this.#internals = this.attachInternals();

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.innerHTML = template;
	}

	connectedCallback() {
		this.#insideForm();
	}

	#insideForm() {
		const btn = this.shadowRoot?.querySelector<HTMLButtonElement>(".btn");
		if (!btn) throw Error("removeBtn should exist");

		if (btn.getAttribute("type") !== "submit") return;

		btn.addEventListener("click", () => this.#internals.form?.requestSubmit());
	}
}

customElements.define("my-button", MyButton);
