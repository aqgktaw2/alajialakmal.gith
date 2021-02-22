import debounce from "@/utils/debounce";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const shapes = [
  <svg viewBox="20 20 150 140" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#A30292"
      d="M35.9,-39.2C46,-34.3,53.4,-22.5,59.3,-7.7C65.2,7.1,69.5,24.8,61.7,33.1C53.9,41.3,34,40.1,18.8,40.9C3.6,41.7,-6.8,44.6,-21.6,45.3C-36.3,46,-55.4,44.5,-63,34.7C-70.6,25,-66.7,6.9,-60.5,-7.6C-54.3,-22.1,-45.7,-33.1,-35.2,-38C-24.7,-42.9,-12.4,-41.7,0.3,-42C12.9,-42.3,25.8,-44.2,35.9,-39.2Z"
      transform="translate(100 100)"
    />
  </svg>,
  <svg viewBox="20 30 150 140" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#A30292"
      d="M29.8,-33.6C41.8,-25.4,56.8,-19,58.8,-10.1C60.7,-1.1,49.4,10.4,40.6,21.4C31.8,32.3,25.6,42.7,14.3,52.5C3.1,62.2,-13.2,71.5,-26,68.2C-38.8,64.9,-48.3,49.1,-55.6,33.5C-62.9,17.9,-68.1,2.5,-65.7,-11.7C-63.3,-25.8,-53.2,-38.6,-41,-46.8C-28.8,-55,-14.4,-58.4,-2.8,-55.1C8.9,-51.9,17.8,-41.8,29.8,-33.6Z"
      transform="translate(100 100)"
    />
  </svg>,
  <svg viewBox="20 15 150 140" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#A30292"
      d="M26.8,-37.3C35.1,-25,42.4,-16.9,50,-4.3C57.5,8.3,65.4,25.3,59.9,34.4C54.4,43.5,35.5,44.7,19.8,47.4C4,50.1,-8.6,54.3,-19,51C-29.3,47.7,-37.3,36.9,-48.6,24.5C-59.9,12.2,-74.5,-1.8,-74.1,-14.7C-73.8,-27.5,-58.3,-39.4,-43.5,-50.5C-28.6,-61.7,-14.3,-72.3,-2.5,-69.3C9.3,-66.3,18.5,-49.7,26.8,-37.3Z"
      transform="translate(100 100)"
    />
  </svg>,
  <svg viewBox="20 30 155 140" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#A30292"
      d="M50.9,-61.2C60.4,-52.6,58.8,-31.4,59.3,-12.8C59.8,5.8,62.3,21.6,57.2,35.5C52.1,49.5,39.5,61.5,24.8,65.8C10.2,70.1,-6.4,66.6,-18.5,58.7C-30.5,50.9,-38.1,38.6,-47.6,25.8C-57.1,12.9,-68.4,-0.6,-67.3,-12.8C-66.2,-24.9,-52.7,-35.8,-39.4,-43.7C-26.1,-51.7,-13.1,-56.7,3.8,-61.2C20.7,-65.7,41.3,-69.8,50.9,-61.2Z"
      transform="translate(100 100)"
    />
  </svg>,
];

const SnippetCard = ({ post }) => {
  const imageContainerRef = useRef();

  useEffect(() => {
    const matchHeight = debounce(function () {
      gsap.to(imageContainerRef.current, {
        height: imageContainerRef.current.getBoundingClientRect().width,
      });
    }, 100);
    matchHeight();
    window.addEventListener("resize", matchHeight);
    return () => {
      window.removeEventListener("resize", matchHeight);
    };
  }, []);

  return (
    <div data-gsap="reveal-bottom" className="snippet-card">
      <div className="snippet-card__shape">{shapes[Math.floor(Math.random() * shapes.length)]}</div>

      <Link href={`/snippets/${post.slug}`} passHref>
        <a className="snippet-card__body">
          <div ref={imageContainerRef} className="snippet-card__image">
            <Image src={post.coverImage} layout="fill" />
          </div>

          <div className="snippet-card__info">
            <h3>Test Snippet Title</h3>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SnippetCard;
