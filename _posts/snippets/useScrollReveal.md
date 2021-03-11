---
title: "useScrollReveal React Hook w/ GSAP"
excerpt: "In this Snippet, we are going to build a re-usable useScrollReveal React hook that is going to animate any element on scroll."
coverImage: "/assets/snippets/useScrollReveal/gsap.jpg"
date: "2021-03-11T05:14:34.929Z"
author:
  name: Denny Hong
  picture: "/assets/authors/denny-hong.jpeg"
ogImage:
  url: "/assets/snippets/useScrollReveal/gsap.jpg"
tags:
  - "JavsScript"
  - "React"
  - "ReactHooks"
  - "UI"
  - "Animation"
type: "snippets"
---

<!-- ARTICLE OVERVIEW -->
<blockquote>
   <h3>Table of contents:</h3>
  <ul>
    <li>
      <h5><a href='#What are we building?'>What are we building?</a></h5>
    </li>
    <li>
      <h5><a href="#Why use GSAP to build it?">Why use GSAP to build it?</a></h5>
    </li>
    <li>
      <h5><a href="#ScrollTrigger.batch(), gsap.to(), gsap.set()">ScrollTrigger.batch(), gsap.to(), gsap.set()</a></h5>
    </li>
    <li>
      <h5><a href="#Hookify the animation logic">Hookify the animation logic</a></h5>
    </li>
    <li>
      <h5><a href="#Using our useScrollReveal hook">Using our useScrollReveal hook</a></h5>
    </li>
  </ul>
</blockquote>
<!-- END ARTICLE OVERVIEW -->

<h2 id="What are we building?">What are we building?</h2>
As a web/frontend developer, inevitably you are going to run into some animation requirements. One of the more popular ones falls somewhere along the lines of "revealing elements in a staggered manner when the page loads, then proceed to reveal more elements as the user keeps on scrolling". And with this "Snippet", we are going to build a React hook "useScrollReveal" that you can drop into any future React-based project and get this type of animation behavior.

<h2 id="Why use GSAP to build it?">Why use GSAP to build it?</h2>
Now, there are definitely libraries that provide this type of animation out of the box, such as "ScrollReveal", and "AOS". But today we are going to "hand roll"(sort of) a solution ourselves with GSAP (GreenSock Animation Platform). And this is not to "Re-invent" the wheel, there are a few good reasons.

1. GSAP takes care of all the frustrating browser inconsistencies when it comes to animation, such as transform-origin, etc.
2. GSAP provides an intuitive and standard syntax for developers.
3. GSAP has silky smooth hardware accelerated animation by using JavaScript and requestAnimationFrame() under the hood by default, instead of CSS (of which you need to manually use rules like "transform3d(0,0,0);" to trigger hardware acceleration).
4. This way you can use all the other great animation/utility features GSAP provides and only needing to import one package/library. Let's first look at the tool we'll be utilizing, which is the ScrollTrigger from GSAP. Its sole purpose is to help minimize the code needed to create scroll-based animations that are otherwise be done with intersection observers or, even the unoptimized "scroll" event listener(please don't do this).

<h2 id="ScrollTrigger.batch(), gsap.to(), gsap.set()">ScrollTrigger.batch(), gsap.to(), gsap.set()</h2>

Let's first look at the tool we'll be utilizing, which is the ScrollTrigger from GSAP. Its sole purpose is to help minimize the code needed to create scroll-based animations that are otherwise be done with intersection observers or, even the unoptimized "scroll" event listener(please don't do this).

Now let's import our tools -

```JavaScript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
```

If you want to animate a one-off element when it enters the viewport, you would use the "create" method on ScrollTrigger. But what we want to achieve is for the elements that are near each other to reveal in a staggered manner. So in this case we need to utilize the "batch" method on ScrollTrigger. (New for GSAP 3)

Now let's create the animation logic -

```JavaScript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

ScrollTrigger.batch('[data-gsap="reveal-bottom"]', {
  onEnter(batch) {
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  },
  onLeave(batch) {
    gsap.to(batch, {
      opacity: 0,
      y: -75,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  },
  onEnterBack(batch) {
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  },
  onLeaveBack(batch) {
    gsap.to(batch, {
      opacity: 0,
      y: 75,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  }
});
```

"ScrollTrigger.batch" method takes in a query selector/elements as the first parameter, which is the query selector you'll apply on every element that you'd like them to reveal on scroll. In our case, we'll give the elements a custom attribute "data-gsap" and the value of "reveal-bottom".

For the 2nd argument, we can pass in an object that has a few callback functions nested in it, those callbacks get the current batch of elements as arguments, and there you can hook into the events when that batch of elements enter the viewport(onEnter), leave the viewport(onLeave), enter the viewport again(onEnterBack), and leave the viewport again(onLeaveBack). And within each callback we could define any logic we want, in our case, we will just animate the batch of elements.

"gsap.to" is one of the most common methods when using the GSAP library, it also takes a query selector/elements as the first argument and some configuration options as an object for the 2nd argument. As the method name suggests, it animates the element(s) to a destination. Let's note the option "stagger: 0.15" within the options object. This is the key for our use case because this makes the batch of elements stagger when they reveal.

After you registered a Mailchimp account and first landed on the dashboard, if you are like me, you are probably a bit lost. But don't worry, simply follow these steps to generate your API key.

There's still one key piece missing in our logic there - we need to actually go in and set up the elements first before any of the animations in the callbacks run. Otherwise, the elements won't look like they are "revealing". Now to do this is very simple with GSAP with a "gsap.set" method that accepts the same arguments as "gsap.to", the difference is that "gsap.set" is instant, it doesn't have any transition. So this is exactly what we are looking for.

```JavaScript
gsap.set('[data-gsap="reveal-bottom"]', { y: 75, opacity: 0 });

ScrollTrigger.batch('[data-gsap="reveal-bottom"]', {
  onEnter(batch) {
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  },
  onLeave(batch) {
    gsap.to(batch, {
      opacity: 0,
      y: -75,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  },
  onEnterBack(batch) {
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  },
  onLeaveBack(batch) {
    gsap.to(batch, {
      opacity: 0,
      y: 75,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1,1)",
    });
  },
});
```

<h2 id="Hookify the animation logic">Hookify the animation logic</h2>

Now we have all the logic for our animation, if you drop this snippet into a vanilla JavaScript project, that should be all you need. But we are working within a React ecosystem, we need to "hookify" this logic. So, let's import "useEffect" hook from React and wrap our animation logic in it -

```JavaScript
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const useScrollReveal = () => {

	// Batch stagger animate any element with data-gsap="reveal-bottom"
	useEffect(() => {
		gsap.set('[data-gsap="reveal-bottom"]', { y: 75, opacity: 0 });

		ScrollTrigger.batch('[data-gsap="reveal-bottom"]', {
			onEnter(batch) {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onLeave(batch) {
				gsap.to(batch, {
					opacity: 0,
					y: -75,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onEnterBack(batch) {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onLeaveBack(batch) {
				gsap.to(batch, {
					opacity: 0,
					y: 75,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			}
		});
	}, []);

	return null;
};

export default useScrollReveal;

```

Note that right now we have an empty dependency array for "useEffect", which means the logic inside will run once the component you used this hook on is mounted, and it'll only run once. Ideally, we should be able to drop this useScrollReveal into "App.js" for CRA projects, or "\_app.js" for Next.js projects, but right now it won't work if we are working on an app/site with multiple routes since changes routes in single page application will not re-load the app, it's just switching the components under the hood.

We need to add a dependence to the "useEffect" dependency array so it re-runs the logic inside whenever the route changes. And for Next.js project like this blog, we could use the "router.asPath". (For CRA apps with react-router, it would be router.location.pathname).

Complete code for the hook -

```JavaScript
import { useRouter } from "next/router";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const useScrollReveal = () => {
	const router = useRouter();

	// Batch stagger animate any element with data-gsap="reveal-bottom"
	useEffect(() => {
		gsap.set('[data-gsap="reveal-bottom"]', { y: 75, opacity: 0 });

		ScrollTrigger.batch('[data-gsap="reveal-bottom"]', {
			onEnter(batch) {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onLeave(batch) {
				gsap.to(batch, {
					opacity: 0,
					y: -75,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onEnterBack(batch) {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onLeaveBack(batch) {
				gsap.to(batch, {
					opacity: 0,
					y: 75,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			}
		});
	}, [router.asPath]);

	return null;
};

export default useScrollReveal;
```

<h2 id="Using our useScrollReveal hook">Using our useScrollReveal hook</h2>
With this, we have setup our "useScrollReveal" hook, and we can call the hook at the entry point of our app. Again, for our Next.js project, that's the "\_app.js"

```JavaScript
export default function MyApp({ Component, pageProps }) {
	useScrollReveal();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
```

And from here, you can give any element you want in any page/component to reveal on scroll a data-gsap="reveal-bottom" attribute.

```JavaScript
import Comp = () => {
  return <>
  <div data-gsap="reveal-bottom">Box</div>
  <div data-gsap="reveal-bottom">Box</div>
  <div data-gsap="reveal-bottom">Box</div>
  </>
}
export default Comp;
```

On app load, our hook will grab all elements with that data attribute on the current page, set them up(hide them initially). Then it will stagger reveal them when their original position is within the current viewport, and keep on revealing as you scroll. The elements that position near each other will be batched and staggered. When you change a route, the above logic will re-run.

Note that I've used a very common "fade in from bottom" type reveal animation, if you don't like that you can play around with the code and adjust the animation options to your liking. And just like that, we've got ourselves a re-usable "useScrollReveal" animation hook that we can bring into any React-based project!
