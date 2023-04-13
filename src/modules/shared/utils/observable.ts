type Subscriber<Data> = (data: Data) => void;

export function observable<Data>() {
	const subscribers = new Set<Subscriber<Data>>();

	function subscribe(subscriber: Subscriber<Data>) {
		subscribers.add(subscriber);

		return () => {
			subscribers.delete(subscriber);
		};
	}

	function unsubscribe(subscriber: Subscriber<Data>) {
		subscribers.delete(subscriber);
	}

	function notify(data: Data) {
		subscribers.forEach((sub) => sub(data));
	}

	return {
		subscribe,
		notify,
		unsubscribe,
	};
}
