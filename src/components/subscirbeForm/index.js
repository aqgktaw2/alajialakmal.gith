import { useState } from "react";

import { subscribe } from "@lib/api";
import Button from "@components/button";
import Loader from "@components/loader";

import { LabelHeading, StyledForm, StyledInput } from "./styles";

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
		<StyledForm id="subscribe" className="subscribe-form" onSubmit={handleSubscribe}>
			<label htmlFor="email-subscribe">
				<LabelHeading level={3}>
					Get notified when new Webdev articles & code snippets arrive.
				</LabelHeading>
			</label>

			<StyledInput
				id="email-subscribe"
				type="email"
				placeholder="example@email.com"
				value={email}
				onChange={handleEmailChange}
			/>

			<Button disabled={!email || isLoading || error}>
				{isLoading ? <Loader /> : "Subscribe"}
			</Button>

			{error && <p>{error}</p>}
			{msg && <p>{msg}</p>}
		</StyledForm>
	);
}
