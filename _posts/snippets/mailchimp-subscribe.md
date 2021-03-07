---
title: "Newsletter Subscribe Cloud Function"
excerpt: "In this Snippet, we are going to utilize Mailchimp API to build a cloud function that you could call on any of your projects where you want your audience to subscribe to your newsletter."
coverImage: "/assets/snippets/mailchimp-subscribe/mailchimp.jpg"
date: "2021-03-07T00:39:37.956Z"
author:
  name: Denny Hong
  picture: "/assets/authors/denny-hong.jpeg"
ogImage:
  url: "/assets/snippets/mailchimp-subscribe/mailchimp.jpg"
tags:
  - "JavsScript"
  - "Nodejs"
  - "JAMStack"
  - "CloudFunction"
type: "snippets"
---

<!-- ARTICLE OVERVIEW -->
<blockquote>
  <h3>Overview:</h3>
  <ul>
    <li>
      <h5><a href='#Generating a Mailchimp API Key'>Generating a Mailchimp API Key</a></h5>
    </li>
    <li>
      <h5><a href="#Retrieving your audience list_id">Retrieving your audience list_id</a></h5>
    </li>
    <li>
      <h5><a href="#Setting up your cloud function">Setting up your cloud function</a></h5>
    </li>
    <li>
      <h5><a href="#Setting up single welcome email">Setting up single welcome email</a></h5>
    </li>
    <li>
      <h5><a href="#Calling your cloud function">Calling your cloud function</a></h5>
    </li>
  </ul>
</blockquote>
<!-- END ARTICLE OVERVIEW -->

In this Snippet, we are going to utilize Mailchimp API to build a cloud function that you could call on any of your projects where you want your audience to subscribe to your newsletter, much like the subscribe form you see at the footer section of this blog.

<h2 id="Generating a Mailchimp API Key">Generating a Mailchimp API Key</h2>

After you registered a Mailchimp account and first landed on the dashboard, if you are like me, you are probably a bit lost. But don't worry, simply follow these steps to generate your API key.

1. You are currently on the Mailchimp dashboard screen
2. On the bottom left corner, click on your profile avatar
3. Click on the "account" option
4. On your account screen, click on the "Extras" option
5. Click on the "API keys" option in the dropdown.

Now you should see the button that lets you create an API key. One part you should note is that we'll also need a Mailchimp server name, which is just the last 4 characters of your API key. For me, it was "us19".

<h2 id="Retrieving your audience list_id">Retrieving your audience list_id</h2>

Our ultimate goal is to use the Mailchimp "members" API - "Add a member to list" endpoint to subscribe an email to your audience list. However, since an account can have several audience lists, this endpoint needs to know which list you are looking to add the email to.

I haven't found a way to find list_id of a list from the Mailchimp dashboard, but we can utilize another endpoint - "Get lists info" to get our lists and find out the list_id that way.

Open Postman, or any other API Development tools, copy and paste the following endpoint URL.

```
https://us19.api.mailchimp.com/3.0/lists
```

In the headers section, set the "Authorization" header to be "basic" and input your MailChimp username and password.

<img src="/assets/snippets/mailchimp-subscribe/postman.png">

If you send the request now, Mailchimp should return you the information of all lists in your account. From there, pick the list you would like emails to subscribe to, and note the list_id.

At this point, you should have a Mailchimp API key, Mailchimp server name, and a list_id. If you have all three, congrats, we can now move on to the function.

<h2 id="Setting up your cloud function">Setting up your cloud function</h2>

To keep things secure, the first thing is to set environment variables.

```
MAILCHIMP_API_KEY=xxx
MAILCHIMP_SERVER=xxx
MAILCHIMP_LIST_ID=xxx
```

You should be able to run the code block below with minimal on AWS Lambda, Google Cloud Functions, or any cloud function service that supports a Node.js runtime environment. For me, it was used in an API route of this blog. Which is built with Next.js and deployed on Vercel.

Note: We need to require the official Node.js client library for the Mailchimp Marketing API - "@mailchimp/mailchimp_marketing".

```JavaScript
const mailChimpClient = require("@mailchimp/mailchimp_marketing");

mailChimpClient.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER,
});
const listId = process.env.MAILCHIMP_LIST_ID;

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const email = JSON.parse(req.body)?.email;

			await mailChimpClient.lists.addListMember(listId, {
				email_address: email,
				status: "subscribed",
			});

			res.status(200).json({
				success: true,
				message: "Awesome, thanks for your subscription!",
			});
		} catch (error) {
			const mailChimpErrorType = error?.response?.body?.title;

			let message;
			switch (mailChimpErrorType) {
				case "Member Exists": {
					message = "You are already subscribed, thanks.";
					break;
				}
				case "Invalid Resource": {
					message = "Please enter a valid email address.";
					break;
				}
				default: {
					message = "Something went wrong, please try again.";
					break;
				}
			}

			res.status(200).json({
				success: false,
				message,
			});
		}
	}
}
```

<h2 id="Setting up single welcome email">Setting up single welcome email</h2>

Head to your Mailchimp Dashboard, click on the "Automation" icon button on the far left of the screen. For our purpose, create a "Single welcome email" that will be triggered every time we subscribe to a new email with our cloud function.

<h2 id="Calling your cloud function">Calling your cloud function</h2>

Now once we have the cloud function in place, we can call it. For payload, we need to pass it an object with a key named "email" and the email you are looking to subscribe as value.

```JavaScript
// Subscribe to newsletter
export async function subscribe({ emailToSubscribe, onSuccess, onError }) {
	try {
		const res = await fetch("<Your function endpoint>", {
			method: "POST",
			body: JSON.stringify({ email: emailToSubscribe }),
		});

		const { success, message } = await res.json();
		if (!success) {
			throw new Error(message);
		}

		onSuccess(message);
	} catch (error) {
		onError(error.message);
	}
}
```

After you call the function, if everything goes well, you should see "Awesome, thanks for your subscription!" as a response, and the welcome email we set up in Mailchimp arrives at the new subscriber.

And just like that, we've set up a cloud function you could call in any project where you want your audience to subscribe to your newsletter, such as your blog or portfolio site, just like this one.
