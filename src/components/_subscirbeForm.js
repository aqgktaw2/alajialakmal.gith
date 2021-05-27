import { useState } from "react";

import Loader from "@components/loader";
import { subscribe } from "@lib/api";

export default function SubsribeForm() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleEmailChange = evt => {
		setError("");
		setMsg("");
		setEmail(evt.target.value);
	};

	const handleSubscribe = async evt => {
		evt.preventDefault();
		setIsLoading(true);
		await subscribe({
			email,
			onSuccess(successMsg) {
				setMsg(successMsg);
				setEmail("");
			},
			onError(errMsg) {
				setError(errMsg);
			},
		});
		setIsLoading(false);
	};

	return (
		<form id="subscribe" onSubmit={handleSubscribe}>
			<label htmlFor="email-subscribe">
				<h3>Get notified when new Webdev articles & code snippets arrive.</h3>
			</label>
			<input
				id="email-subscribe"
				type="email"
				placeholder="example@email.com"
				value={email}
				onChange={handleEmailChange}
			/>
			<button disabled={!email || isLoading || error}>
				{isLoading ? <Loader /> : "Subscribe"}
			</button>
			{error && <p>{error}</p>}
			{msg && <p>{msg}</p>}
		</form>
	);
}
