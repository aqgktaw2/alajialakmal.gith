---
title: Intro to JAM Stack 1 - What is it, and why?
excerpt: In this article, I go over what "JAM Stack" means, how it works on the high
  level, and why I've come to love it in plain terms.
coverImage: "/jamstack.png"
date: 2021-03-06T18:43:31.186+00:00
author:
  name: Denny Hong
  picture: "/assets/authors/denny-hong.jpeg"
ogImage:
  url: "/assets/blog/intro-to-jam-stack-1-what-is-it-and-why/cover.jpg"
tags:
- JavaScript
- JAMStack
type: posts

---
<!-- ARTICLE OVERVIEW -->
<blockquote>
<h3>Table of contents:</h3>
<ul>
<li>
<h5><a href='#What is the term "JAM Stack"?'>What is the term "JAM Stack"?</a></h5>
</li>
<li>
<h5><a href="#How does JAM Stack work?">How does JAM Stack work?</a></h5>
</li>
<li>
<h5><a href="#Why I love JAM Stack?">Why I love JAM Stack?</a></h5>
</li>
</ul>
</blockquote>
<!-- END ARTICLE OVERVIEW -->

<!-- WHAT IS JAM STACK -->
<h2 id='#What is the term "JAM Stack"?'>What is the term "JAM Stack"?</h2>

Let's talk about the term "JAM Stack" first. You most likely already know JAM Stack stands for JavaScript, API, and Markups. In that sense, you may find it doesn't really feel like one of those "stacks" we commonly refer to. When one talks about JAM Stack, he/she is typically not referring to a specific combination of technologies, such as LAMP (Linux, Apache, MySQL, PHP), or MERN (MongoDB, Express, React, Node). JAM Stack is a much broader term, it's rather a technique/architecture choice of which you could utilize to build performant and robust websites/web apps.

<!-- END WHAT IS JAM STACK -->

<!-- HOW DOES JAM STACK WORK -->
<h2 id="How does JAM Stack work?">How does JAM Stack work?</h2>

So, what's the technique, and what's so special about this type of architecture? Well, let's first think about the following events.

1. Fetching data/content from Database/Content Management System
2. Processing gathered data/content
3. Embedding processed data/content into markup
4. Sending over the static markup to the user's browser

### Request Time page generation vs. Build Time page generation

For a traditional monolith website, take a traditional WordPress site, for instance. The above events happen on the server at "request time" - meaning right after whenever a user requests to view the website. So before the user could view the markup, the server needs to finish computation on those 4 steps. Let's see how a JAMStack site differs from this.

For JAM Stack sites, those events happen at the "build time" - when the website codebase is being built/compiled, either locally on a developer's machine, or on a server. This means, they first happen before the website is even available for the world to view. Later on, they may happen again, and periodically whenever developers make edits to the codebase, or new content entries arrive from the CMSs, thus the site needs to be rebuilt. 

### CDN Hosted Markup

Now let's dig a bit more into event 4 - "Send over the markup to user's browser". This event works a bit differently for JAM Stack sites. As I mentioned, the static markup is built in advance. So in order to make it available to users at a later time when the request hits, the markup is typically put on a CDN/Edge Network. The key takeaway is that it doesn't involve any server computation between a user sends a request to view the website, and the markup is sent over to his/her browser. 

### JavaScript & API

Now we have covered the "markup" side of JAM Stack, and we understand we can get the pre-built static markup of the website from a CDN. So what about the JavaScript, and API side of things? Well, just like a monolith website, JavaScript can be used to add UI functionality/interactivity to your static markup after it hits the browser, there's not much difference there.

And API gets into the mix when you want to render highly dynamic data, which doesn't make sense to be pre-fetched and embedded into the static markup at "built-time". So instead, you could use something like Fetch/Axios to call the API endpoints after the markup has arrived at the browser, which gets the up-to-date JSON data in return, then render it on the page.

### Build Automation

At this point, if you are like me, you are probably wondering about this - Does it mean we have to manually rebuild the site after every little edit/new content entry on the Database/Content Management System? I know, that sounds like a lot of manual labor, and as developers, we hate that! But don't worry just yet, modern JAM Stack tools like Next.js and Gatsby enables data revalidation/incremental build functionalities that automates all that work. In fact, the developer experience with JAM Stack tools is awesome, but more on that later.

<!-- END HOW DOES JAM STACK WORK -->

<!-- WHY I LOVE JAM STACK -->
<h2 id="Why I love JAM Stack?">Why I love JAM Stack?</h2>

Now we know what JAM Stack is and have a general idea of how it works. Let's talk about its advantages and why I came to love this architectural choice. As mentioned, the key difference between a JAM Stack site and a traditional monolith website is that your server is not involved in any type of way when a user requests to view a JAM Stack website. Given that, I think it's easy for us to come to an agreement on the following advantages:

### More Available & Scalable

Let say for some reason your server is down, (oh no!) what this means for a monolith site is that your website is now down as a whole, as it always relies on the server to generate the markup on request. It's a different story for JAM Stack sites because users are really just requesting a fully cached site from the CDN. So as long as the CDN is up, your site is always available. A bonus point is scalability, since the whole site is cached at the CDN layer, scalability is automatically taken care of without you introducing extra caching logic.

### More Performant

Thanks to JAM Stack sites being hosted and cached on CDNs, and the fact that they skip the server computation/page generation part, the page loading speed for users from anywhere your CDN covers is instant. And this is achieved without you managing complex infrastructure.

### More Secure

Serving pre-built sites from CDNs means not needing to expose an entry point of your server to end-users, thus the chances of your server getting attack are greatly reduced. You can even go an extra step to put your API endpoints on cloud functions or replace them with services built specifically for the JAM Stack, further eliminating the need for you to manage a server. More on this at another time.

### Progressive Enhancement

Earlier we talked about using JavaScript and API to enhance your website's functionalities after the markup arrives at the user's browser from CDNs. What's brilliant about this is that those are opted-in, you can add those in as you go.

Take this blog site for example. It's a JAM Stack site hosted on Vercel's CDN/Edge Network. Initially, it's just static markup, after the static markup arrives in your browser, I have some JavaScript to add in UI animations. I didn't need any API until I added the newsletter subscribe functionality in the footer section, which is integrated with Mailchimp "members" API.

<!-- END WHY I LOVE JAM STACK -->

I hope this is a decent introduction of the JAM Stack architecture and some of its advantages over traditional monolith architecture. This is the first part of the "Intro to JAM Stack" series, in the next part I'll be talking about what type of website/web apps we could build with the JAM Stack, and we'll be looking at some implementation examples together.