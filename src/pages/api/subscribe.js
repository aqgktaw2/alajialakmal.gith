const mailChimpClient = require("@mailchimp/mailchimp_marketing");

mailChimpClient.setConfig({
	apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
	server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER,
});

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const email = JSON.parse(req.body)?.email;
			await mailChimpClient.lists.addListMember(process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID, {
				email_address: email,
				status: "subscribed",
			});

			res.status(200).json({
				success: true,
				message: "Awesome, thanks for your subscription!",
			});
		} catch (error) {
			const mailChimpErrorType = error?.response?.body?.title;
			const message =
				mailChimpErrorType === "Member Exists"
					? "You are already subscribed, thanks."
					: mailChimpErrorType === "Invalid Resource"
					? "Please enter a valid email address."
					: "Something went wrong, please try again.";

			res.status(200).json({
				success: false,
				message,
			});
		}
	}
}
