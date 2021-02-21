import Link from "next/link";

import IconGithub from "./IconGithub";
import IconTwitter from "./IconTwitter";
import IconEmail from "./IconEmail";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Blog" },
  { href: "/snippets", label: "Snippets" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="global-footer">
      <div class="global-footer__waves">
        <div class="global-footer__wave" />
        <div class="global-footer__wave" />
      </div>

      <div className="global-footer__content">
        <div className="global-footer__inner">
          <div className="global-footer__left">
            <form>
              <h3>Get notified when new articles & snippets arrives.</h3>
              <input type="email" placeholder="example@email.com" />
              <button className="btn">Subscribe</button>
            </form>
          </div>
          <div className="global-footer__right">
            <div className="global-footer__site-links">
              <h2>Site Links</h2>
              <nav>
                <ul>
                  {NAV_ITEMS.map(({ href, label }, idx) => (
                    <li key={idx}>
                      <Link href={href} passHref>
                        <a>{label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="global-footer__social">
              <h2>Get in touch</h2>
              <ul>
                <li>
                  <Link href="/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <IconGithub width="3rem" height="3rem" /> Github
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <IconTwitter width="3rem" height="3rem" /> Twitter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <IconEmail width="3rem" height="3rem" /> Email
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
